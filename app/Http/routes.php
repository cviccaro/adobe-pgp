<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('test', function() {
    $gpg = new Crypt_GPG();
    $gpg->addEncryptKey('sgebhart@jpenterprises.com');

    $encrypted = $gpg->encrypt('test');

    dump(['encrypted' => $encrypted]);

    $gpg->addDecryptKey('sgebhart@jpenterprises.com', file_get_contents(base_path('/passphrase-6DD1F3A9.txt')));

    $decrypted = $gpg->decrypt($encrypted);

    dump(['decrypted' => $decrypted]);
    return response('Gpg!');
});

Route::post('/api/decrypt', 'PGPController@decrypt');
Route::post('/api/encrypt', 'PGPController@encrypt');

Route::any('/{page?}/{subpage?}/{id?}', function () {
    return view('angular');
});
