<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Auth;
use Lang;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Article::class, 'article');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //FIX THIS
        // $Articles = Article::all()->ordyerBy('id' ,'DESC')->where('status', 1)->get();
        $Articles = Article::orderBy('id' , 'DESC')
                                ->where('author_id' , Auth::user()->id)
                                ->get();

        if($Articles->isEmpty()){
            abort(404 , 'navs.general.home' );
        }
        return view('frontend.Article.index' , compact('Articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('frontend.article.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'unique:articles', 'max:255'],
            'organisation' => 'required',
            'position' => 'required',
            'another_info' => ['max:1000'],

        ]);
        if ($validator->fails()) {
            return redirect('article/create')
                        ->withErrors($validator)
                        ->withInput();
        }


        $input = [];
        $input = $request->all();

        $input['name'] = $request->get('name');
        $input['organisation'] = $request->get('organisation');
        $input['position'] = $request->get('position');
        $input['another_info'] = $request->get('another_info');
        $input['status'] =  mt_rand(1,3);
        $input['author_id'] = Auth::user()->id;

        Article::create($input);
        // return redirect('article');
        return redirect( 'article/' . Article::latest()->first()->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return view('frontend.Article.show' , compact('article'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return dd($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
