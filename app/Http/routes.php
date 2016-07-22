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
    $base64 = 'hIwD2ePMSQOQmxYBBACh8VnHTRsOBJscOhBsHE/G7KSFr6D25/fFYlzgZGILGhfaLp7uiCnkvC8jYU0HQinEgOVlMOlYVX4n1ixxJ/4Un7dWX/ohqDwTCqOP/Nem6KHPzrYBfUmwbiAx6IQaZb5M9ZRrh58AL79N3fNnfvBV2gBY/0ECsJzxZJ1Bvn2GUdLAQAGoy6+xjqaJqD2UZV3mmygbe4E3rlbBMmKTdJ5Xv2/QVIDsWMREShgxRto9ZbnWZ7cY47sY7i6dShFabXsh3hjRpycyjChXDo/KI2MDXm6UoVnAGoMZUAFj1QNoICIXI9za1D/WBNZ9TlRDv0/defaxMLvjUTEfk5Oe0rNTwpr4aq94BP0qiOjWe29StKbooOPWwZWUUJs8FY7/I6gfExKvEzFKV+Ip4E9LUu6SLG5WMSq4TNqn6kJKTOPXuLXNv9lzK/Mx6Q5IZIzfnkOeePZ3rmLrW6FfeNW6W2beO3rxEZ5cP/0IQM+aNP+IdRxHSRmRHnjpXblo3DeseeWrpOY=';

    $decoded = base64_decode($base64);

    $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
    $gpg = new Crypt_GPG();
    $gpg->addDecryptKey(env('PGP_KEY'), $pass);

    $decrypted = $gpg->decrypt($decoded);

    return response($decrypted);
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
