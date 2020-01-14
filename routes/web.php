<?php

use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\DB;
/*
 * Global Routes
 * Routes that are used between both frontend and backend.
 */
// Switch between the included languages
Route::get('/rnd', function () {
    $users = DB::table('articles')
            ->join('article_statuses', 'articles.status', '=', 'article_statuses.id')
            ->select('articles.id' , 'article_statuses.name as status_name' )
            ->get();
    dd($users);

});
Route::get('lang/{lang}', [LanguageController::class, 'swap']);

/*
 * Frontend Routes
 * Namespaces indicate folder structure
 */
Route::group(['namespace' => 'Frontend', 'as' => 'frontend.'], function () {
    include_route_files(__DIR__.'/frontend/');
});

Route::resource('article', 'ArticleController', [
    'names' => [
        'index' => 'article.index',
        'store' => 'article.store',
    ]
]);

/*
 * Backend Routes
 * Namespaces indicate folder structure
 */
Route::group(['namespace' => 'Backend', 'prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    /*
     * These routes need view-backend permission
     * (good if you want to allow more than one group in the backend,
     * then limit the backend features by different roles or permissions)
     *
     * Note: Administrator has all permissions so you do not have to specify the administrator role everywhere.
     * These routes can not be hit if the password is expired
     */
    include_route_files(__DIR__.'/backend/');
    Route::resource('/article' , 'BArticlesController');

});
