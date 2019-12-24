<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'name',
        'author_id',
        'organisation',
        'position',
        'another_info',
        'status',
        ];

    public function user()
    {
        return $this-> belongsTo('App\User');
    }
}
