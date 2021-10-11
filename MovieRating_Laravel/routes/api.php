<?php

use App\Http\Controllers\MovieRatingController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/movie_ratings', MovieRatingController::class);

//Routes for the movie rating API
Route::get('/movie_ratings/movie_id/{movieId}', [MovieRatingController::class, 'getMovieRatingsByMovieId']);
Route::get('/movie_ratings/user_id/{userId}', [MovieRatingController::class, 'getMovieRatingsByUserId']);
Route::get('/movie_ratings/movie_id/{movieId}/user_id/{userId}', [MovieRatingController::class, 'getMovieRatingsByUserIdAndMovieId']);

/*Route::post('/user_id/{userId}/movie_id/{movieId}',[MovieRatingController::class,'MovieRatingController@storeByUserandMovieID']);*/

Route::post('/movie_ratings/movie_id/{movieId}/user_id/{userId}/movie_rating/{movie_rating}',[MovieRatingController::class, 'store']);

/*Route::put('/user_id/{userId}/movie_id/{movieId}', [MovieRatingController::class,'MovieRatingController@updateByUserandMovieID']);*/
Route::put('/movie_ratings/movie_id/{movieId}/user_id/{userId}/movie_rating/{movie_rating}', [MovieRatingController::class,'update']);

Route::delete('/movie_ratings/movie_id/{movieId}/user_id/{userId}', [MovieRatingController::class, 'destroybyUserandMovieID']);
