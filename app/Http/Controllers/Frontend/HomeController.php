<?php

namespace App\Http\Controllers\Frontend;

use App\Article;
use App\Http\Controllers\Controller;


/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index(Article $article)
    {
        $Articles = Article::orderBy('id' , 'DESC')
                                ->where('status' , 1)
                                ->get();

        if($Articles->isEmpty()){
            abort(404 , 'navs.general.home' );
        }
        return view('frontend.index' , compact('Articles'));
    }

}
