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

            foreach($lists as $list) {
                $data = $list['data'];
                $filename = $list['file'];
                $output['lists'][$filename] = [
                    'data' => [],
                    'url' => ''
                ];

                $out_file_rows = [];

                foreach($data as $datum) {
                    $email = array_values($datum)[0];
                    $base64 = base64_encode($this->_sign($email, false));
                    $output['lists'][$filename]['data'][$email] = [
                        'armored' => $this->_sign($email),
                        'base64' => $base64
                    ];

                    $out_file_rows[] = ['email' => $email, 'base64' => $base64];
                }

                $created = \Excel::create($list['file'], function($excel) use ($out_file_rows) {
                     $excel->sheet('Sheet 1', function($sheet) use ($out_file_rows) {
                        $sheet->fromArray($out_file_rows);
                     });
                })->store('csv');

                $output['lists'][$filename]['url'] = url('api/exports/' . $filename);
                $output['url'] = url('api/exports/bulk-export-' . time() . '.zip');
                $files[] = $filename;
            }

            return response($output);
        }

        abort(400);
    }

    public function getExport(Request $request, $filename) {
        return response()->download(storage_path('exports/'. $filename . '.csv'));
    }

    protected function _sign($content, $armor = true) {
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addSignKey(env('PGP_KEY'), $pass);

        return $this->gpg->sign($content, $armor);
    }

    protected function _encrypt($content, $armor = true) {
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addEncryptKey(env('PGP_KEY'));
        $this->gpg->addSignKey(env('PGP_KEY'), $pass);

        return $this->gpg->encryptAndSign($content, $armor);
    }
}
