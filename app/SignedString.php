<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SignedString extends Model
{
    protected $table = 'signed_string';

    protected $fillable = ['text', 'armored', 'base64', 'list_id'];

    public $timestamps = false;
}
