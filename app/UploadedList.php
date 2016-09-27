<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadedList extends Model
{
    protected $table = 'list';

    protected $fillable = [ 'filename', 'rows', 'complete', 'time_left' ];

    protected $appends = [ 'progress' ];

    public function signedStrings() {
        return $this->hasMany('App\SignedString', 'list_id', 'id');
    }

    public function getProgressAttribute() {
        return $this->signedStrings->count();
    }

    public function scopeIncomplete($query) {
    	return $query->where('complete', 0);
    }
}
