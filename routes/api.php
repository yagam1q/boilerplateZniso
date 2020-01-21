<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/update/article/{data}', function (Request $request) {
//     return $request->all();
// });
// Route::group(['middleware' => 'auth:api'], function() {

Route::get('/articles' , 'ApiController@api');
Route::get('/articles-update/{id}' , 'ApiController@apiUpdate');
Route::post('/update/article/{data}' , 'ApiController@mail');
