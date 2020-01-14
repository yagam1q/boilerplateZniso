<?php

namespace App\Http\Controllers;

use App\Article;
use App\Article_status;
use App\Models\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

use Auth;
use Illuminate\Foundation\Auth\User as AuthUser;
use Lang;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Articles = Article::orderBy('id' , 'DESC')
                                ->where('author_id' , Auth::user()->id)
                                ->paginate(10);

        if($Articles->isEmpty()){
            return view('frontend.Article.index');
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

        $this->authorize('edit', $article);

        return view('frontend.Article.edit' , compact('article'));

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
        $Article = Article::find($article->id);
        $Article->name = $request->get('name');
        $Article->organisation = $request->get('organisation');
        $Article->position = $request->get('position');
        $Article->another_info = $request->get('another_info');
        // $Article->status = 2;
        $Article->save();

        return redirect( 'article/' . $article->id);
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

    public function api ()
    {

            return datatables()->of(
                DB::table('articles')
                ->join('article_statuses', 'articles.status', '=', 'article_statuses.id')
                ->select('articles.created_at' ,  'articles.id' ,'articles.name' , 'articles.organisation', 'article_statuses.name as status_name' )
                ->get()
            )->toJson();

    }

}
