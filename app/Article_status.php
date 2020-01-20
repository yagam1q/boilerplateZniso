<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article_status extends Model
{
//    protected $table = 'article_statuses';

    protected $fillable = [
        'name',
    ];
    public function name(){
        $this->belongsTo(Article::class);
    }
}
