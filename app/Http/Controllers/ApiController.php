<?php

namespace App\Http\Controllers;

use App\Article;
use App\Mail\Artile;
use App\Models\Auth\User;
use Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class ApiController extends Controller
{
    public function api ()
    {
            return datatables()->of(
                DB::table('articles')
                ->join('article_statuses', 'articles.status', '=', 'article_statuses.id')
                ->select('articles.created_at' ,  'articles.id' ,'articles.name' , 'articles.organisation', 'article_statuses.name as status_name' )
                ->get()
            )->toJson();

    }
    public function apiUpdate ($id)
    {
        $Article = Article::find($id);
        $Article->status = 1;
        $Article->save();
        return $id;
    }
    public function  mail(Request $request ){
 
        $data = [
            'name'      => 'Biggus Dickus',
            'message'   => 'The life of brian',
            'subject'   => 'Laravel Plain Email',
            'from'      => 'info@local.com',
            'from_name' => 'Laravel Plain Email',
        ];

        Mail::to('pudovkinms@fcgie.ru', 'Maxim')->send(new Artile($data));

        return "Plain Email Sent. Check your inbox.";

    }
}
