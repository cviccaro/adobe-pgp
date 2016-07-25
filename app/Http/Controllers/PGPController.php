<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PGP;
use App\Http\Requests;

class PGPController extends Controller
{
    protected $gpg;

    public function __construct()
    {
        $this->gpg = new \Crypt_GPG();
    }

    public function encrypt(Request $request) {
        $content = $request->getContent();

        if ($content) {
            return [
                'armored' => $this->_encrypt($content),
                'base64' => base64_encode($this->_encrypt($content, false))
            ];
        }

        abort(400);
    }

    public function encryptMany(Request $request) {
        if ($request->has('lists')) {
            $lists = $request->get('lists');

            $output = [];

            foreach($lists as $list) {
                $data = $list['data'];
                $output[$list['file']] = [];

                foreach($data as $datum) {
                    $email = array_values($datum)[0];
                    $output[$list['file']][$email] = $this->_encrypt($email);
                }
            }

            return response($output);
        }

        abort(400);
    }

    public function decrypt(Request $request) {
        $content = str_replace('↵', '\n', $request->getContent());

        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addDecryptKey(env('PGP_KEY'), $pass);

        if ($content) {
            $decrypted = $this->gpg->decrypt($content);

            return ['decrypted' => $decrypted];
        }

        abort(400);
    }

    public function sign(Request $request) {
        $content = $request->getContent();

        if ($content) {
            return [
                'armored' => $this->_sign($content),
                'base64' => base64_encode($this->_sign($content, false))
            ];
        }

        abort(400);
    }

    public function signMany(Request $request) {
        if ($request->has('lists')) {
            $lists = $request->get('lists');
            $files = [];

            $output = ['lists' => [], 'url' => ''];
            $zipper = new \Chumper\Zipper\Zipper();

            $bulk_export_filename = 'bulk-export-' . time() . '.zip';

            $zip = $zipper->make(storage_path('exports/' . $bulk_export_filename));

            foreach($lists as $list) {
                $data = $list['data'];
                $list_filename = $list['file'];
                $output['lists'][$list_filename] = [
                    'data' => [],
                    'url' => ''
                ];

                $out_file_rows = [];

                foreach($data as $datum) {
                    $email = array_values($datum)[0];
                    $base64 = base64_encode($this->_sign($email, false));
                    $output['lists'][$list_filename]['data'][$email] = [
                        'armored' => $this->_sign($email),
                        'base64' => $base64
                    ];

                    $out_file_rows[] = ['email' => $email, 'base64' => $base64];
                }

                $created = \Excel::create($list_filename, function($excel) use ($out_file_rows) {
                     $excel->sheet('Sheet 1', function($sheet) use ($out_file_rows) {
                        $sheet->fromArray($out_file_rows);
                     });
                })->store('csv');

                \Log::info('Adding file to zip ' . storage_path('exports/' . $list_filename . '.csv'));

                $zip->add(storage_path('exports/' . $list_filename . '.csv'));

                $output['lists'][$list_filename]['url'] = url('api/exports/' . $list_filename);
            }

            $output['url'] = url('api/exports/' . $bulk_export_filename);

            return response($output);
        }

        abort(400);
    }

    public function getExport(Request $request, $filename) {
        $path = storage_path('exports/'. $filename . '.csv');
        if ( !file_exists($path) ) $path = storage_path('exports/'. $filename);
        return response()->download($path);
    }

    protected function _sign($content, $armor = true) {
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addSignKey(env('PGP_KEY'), $pass);

        return $this->gpg->sign($content, \Crypt_GPG::SIGN_MODE_NORMAL, $armor);
    }

    protected function _encrypt($content, $armor = true) {
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addEncryptKey(env('PGP_KEY'));
        $this->gpg->addSignKey(env('PGP_KEY'), $pass);

        return $this->gpg->encryptAndSign($content, $armor);
    }
}
