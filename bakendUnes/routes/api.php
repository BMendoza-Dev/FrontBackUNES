<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PerfilesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CuentasController;

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
//Route::get('Asambleistas',[CuentaController::class, 'index']);
    
//Route::get('/Cuentas/{correo}', [CuentaController::class, 'validar']);
//Route::get('/Asistentes', [CuentaController::class, 'asistentes']);




Route::post('Login',[AuthController::class, 'Login']);


Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('Asambleistas',[CuentasController::class, 'index']);
    Route::get('Asistentes', [CuentasController::class, 'asistentes']);
    Route::get('Perfiles',[PerfilesController::class, 'index']);

    Route::post('Register',[AuthController::class, 'Register']);
    Route::post('Logout',[AuthController::class, 'Logout']);
});



//Route::get('Asambleistas',[CuentasController::class, 'index']);
