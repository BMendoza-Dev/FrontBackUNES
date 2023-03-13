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


Route::get('/Blogsnotify', function () {
    event(new \App\Events\BlogsnotifyEvent('holamundo'));
    return 'hola mundo';
});