<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pgp extends Model
{
    protected $fillable = ['email', 'encrypted'];
}
