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

Route::get('questions', [\App\Http\Controllers\QuestionController::class, 'index']);
Route::get('questions/{id}', [\App\Http\Controllers\QuestionController::class, 'show']);
Route::post('questions/{questionId}/answer/{answerId}', [\App\Http\Controllers\QuestionController::class, 'handleMarkUserChoice']);

