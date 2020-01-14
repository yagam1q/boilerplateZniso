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
                                ->paginate(10);

        if($Articles->isEmpty()){
           view('frontend.index');
        }
        return view('frontend.index' , compact('Articles'));
    }

}
