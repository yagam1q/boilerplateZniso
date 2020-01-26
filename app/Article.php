<?php

namespace App;

use App\Models\Auth\User;
use App\Article_status;
use Auth;
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
        'fileName',
        'fileOriginalName',

        ];
    public function status(){
            return $this->hasMany(Article_status::class , 'id');
    }
    public function auth (){
        return $this->belongsTo(User::class);
    }

}
