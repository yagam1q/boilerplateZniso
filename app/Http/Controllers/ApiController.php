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
        $Article->status = 3;
        $Article->save();
        return 'Успешно!';
    }
    public function  mail(Request $request){

        $User = User::find($request->author_id);
        $Article = Article::findorfail($request->article_id);
        $data = [
            'name'      => $User->first_name.' '.$User->last_name,
            'message'   => $request->theme,
        ];

        $Article->status = 3;
        $Article->save();



        Mail::to($User->email, $User->first_name.' '.$User->last_name)->send(new Artile($data));

        return "Сообщение отправлено!";

    }
}
