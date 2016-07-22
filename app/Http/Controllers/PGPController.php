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
            return ['encrypted' => $this->_encrypt($content)];
        }

        abort(400);
    }

    protected function _encrypt($content) {
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $this->gpg->addEncryptKey(env('PGP_KEY'));
        $this->gpg->addSignKey(env('PGP_KEY'), $pass);

        return $this->gpg->encryptAndSign($content);
    }

    public function encryptMany(Request $request) {
        if ($request->has('lists')) {
            $lists = $request->get('lists');
            \Log::info('Lists: ' . print_r($lists, true));

            $output = [];

            foreach($lists as $list) {
                $data = $list['data'];
                $output[$list['file']] = [];

                \Log::info('List data: ' . print_r($data, true));
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
}
