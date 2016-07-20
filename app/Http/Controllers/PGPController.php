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
            $this->gpg->addEncryptKey(env('PGP_KEY'));

            return ['encrypted' => $this->gpg->encrypt($content)];
        }

        abort(400);
    }

    public function decrypt(Request $request) {
        $content = str_replace('↵', '\n', $request->getContent());

        $pass = file_get_contents(base_path('/passphrase-6DD1F3A9.txt'));
        $this->gpg->addDecryptKey(env('PGP_KEY'), $pass);

        if ($content) {
            $decrypted = $this->gpg->decrypt($content);

            return ['decrypted' => $decrypted];
        }

        abort(400);
    }
}
