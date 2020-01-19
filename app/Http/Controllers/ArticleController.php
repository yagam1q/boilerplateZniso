<?php

namespace App\Http\Controllers;

use App\Article;
use App\Article_status;
use App\Models\Auth\User;
use App\Models\Traits\Uuid;
use Illuminate\Support\Facades\File;
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
            return view('frontend.Article.index', compact('Articles'));
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
        // dd($request);
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'unique:articles', 'max:255'],
            'authors' => 'required',
            'organisation' => 'required',
            'position' => 'required',
            'another_info' => ['max:1000'],
            'upload' => 'mimes:pdf,doc,docx,xlsx|max:10000',

        ]);

        if ($validator->fails()) {
            return redirect('article/create')
                        ->withErrors($validator)
                        ->withInput();
        }

        $input = [];

        $input = $request->all();
        $input['name'] = $request->get('name');
        $input['authors'] = implode("~~; " , $request->get('authors'));
        $input['organisation'] = implode("~~; " , $request->get('organisation'));
        $input['position'] = implode("~~; " , $request->get('position'));
        $input['another_info'] = $request->get('another_info');
        $input['status'] =  1;
        $input['author_id'] = Auth::user()->id;

        // if validation success

        if ($request->hasFile('upload')) {
            $path = public_path('storage').'/data/'. Auth::user()->id;
            File::isDirectory($path) or File::makeDirectory($path, 0777, true, true);
            $file = $request->file('upload');
            $originalName = $file->getClientOriginalName();
            $name = date('d-m-y'). rand(11111,99999) . '.' . $file->getClientOriginalExtension();
            $file->move($path, $name);
            $input['fileName'] = $name;
            $input['fileOriginalName'] = $originalName;
        }

        Article::create($input);
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

}
