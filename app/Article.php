<?php

namespace App;

use App\Models\Auth\User;
use App\Article_status;
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
}
