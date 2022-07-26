<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function () {
    Route::get('todas-turmas', 'App\Http\Controllers\TeamsController@index');
    Route::post('criar-turmas', 'App\Http\Controllers\TeamsController@store');
    Route::delete('excluir-turmas/{id}', 'App\Http\Controllers\TeamsController@destroy');
    Route::get('editar-turma/{id}', 'App\Http\Controllers\TeamsController@show');
    Route::patch('alterar-turma', 'App\Http\Controllers\TeamsController@update');
});