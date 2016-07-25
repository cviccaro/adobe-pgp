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
	$gpg->addEncryptKey(env('PGP_KEY'));
	$gpg->addSignKey(env('PGP_KEY'), '1w2bam&litt');
	$signed = $gpg->sign('wtf');
	return response($signed);
});

Route::post('/api/decrypt', 'PGPController@decrypt');
Route::post('/api/encrypt', 'PGPController@encrypt');
Route::post('/api/sign', 'PGPController@sign');
Route::post('/api/sign-many', 'PGPController@signMany');
Route::post('/api/encrypt-many', 'PGPController@encryptMany');
Route::get('/api/exports/{filename}', 'PGPController@getExport');

Route::post('/api/upload-list', 'ListController@uploadAndParse');

Route::any('/{page?}/{subpage?}/{id?}', function () {
    return view('angular');
});
