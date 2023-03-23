<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerfilesController;

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

Route::get('login', function () {
    return view('welcome');
})->name('login');
//Route::get('login', \App\Http\Livewire\Login::class)->name('login');
Route::get('Perfiles',[PerfilesController::class,'index']);
Route::get('/.well-known/pki-validation/C9E0F1BCB7AC62A99CECEE6BC92EEEA4.txt', function () {
    return response()->file(storage_path('app/public/C9E0F1BCB7AC62A99CECEE6BC92EEEA4.txt'));
});