<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



/*creazione della resource tramite controller per gestire le crud come detto da Ale Tola nel tutorial 3 min 12.30*/
Route::resource('ratings', 'App\Http\Controllers\MovieRatingController');
