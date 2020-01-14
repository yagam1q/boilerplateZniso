<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'name',
        'author_id',
        'authors',
        'organisation',
        'position',
        'another_info',
        'status',
        ];

    public function user()
    {
        return $this-> belongsTo('App\User');
    }
    public function stat()
    {
        return $this-> belongsTo(ArticleStatus::class , 'id');
    }
}
