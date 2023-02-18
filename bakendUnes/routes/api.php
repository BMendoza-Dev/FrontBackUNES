<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PerfilesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CuentasController;
use App\Models\Perfil;
use App\Models\Imagen;
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

Route::get('/usodeimagen', function (Request $request) {

    $Perfiles2 = new Perfil();
    $urlimagenes=[];
    $urlimagenes[]['imagen']="12j3h1j2n31kn23k1nk";
    $Perfiles2->id=1;
    $Perfiles2->active=1;
    $Perfiles2->curul=0;
    $Perfiles2->firstName='prueba';
    $Perfiles2->jurisdiction='prueba';
    $Perfiles2->lastName='prueba';
    $Perfiles2->politicalParty='prueba';
    $Perfiles2->territorialDivision='prueba';
    $Perfiles2->usedFirstName='UNION POR LA ESPERANZA';
    $Perfiles2->usedLastName='UNION POR LA ESPERANZA';
    $Perfiles2->save();
    $Perfiles2->image()->createMany($urlimagenes);

    $validacion= Perfil::with('image')->get();
 //   dd($aux);
 return  response()->json($validacion);
});



Route::post('Login',[AuthController::class, 'Login']);
Route::get('Perfiles',[PerfilesController::class, 'index']);

Route::group(['middleware'=>['auth:sanctum']],function(){

    Route::get('ListarPerfiles',[PerfilesController::class, 'ListarPerfiles']);
    Route::get('ObtenerImagen',[PerfilesController::class, 'ObtenerImagen']);
    Route::get('ObtenerAsambleistaTerritorio',[PerfilesController::class, 'ObtenerAsambleistaTerritorio']);
    Route::get('ObtenerTerritorio',[PerfilesController::class, 'ObtenerTerritorio']);

    Route::get('Asambleistas',[CuentasController::class, 'index']);
    Route::get('Asistentes', [CuentasController::class, 'asistentes']);
    Route::get('Admin', [CuentasController::class, 'administrador']);
    

    Route::post('Register',[AuthController::class, 'Register']);
    Route::post('Logout',[AuthController::class, 'Logout']);
    Route::post('Update',[AuthController::class, 'Update']);
});



//Route::get('Asambleistas',[CuentasController::class, 'index']);
