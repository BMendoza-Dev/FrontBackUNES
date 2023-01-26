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

use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PerfilesController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Cuentas/Asambleistas',[CuentaController::class, 'index']);
    
Route::get('/Cuentas/{correo}', [CuentaController::class, 'validar']);


Route::get('Perfiles',[PerfilesController::class, 'index']);

