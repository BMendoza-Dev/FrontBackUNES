<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PerfilesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\BlogsController;
use App\Models\Biografia;
use App\Models\Perfil;
use App\Models\Sesion;
use App\Models\Tema;
use Illuminate\Support\Facades\Http;
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
Route::get('/prueva', function (Request $request) {


   // $str="2023-02-07 , 2023-03-02";

    
    $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
        'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
        'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
    ]);
    $token = $tokenapi->json();
        $ListaSesiones = Http::withHeaders([
        'Content-Type' => 'application/jason',
        'Authorization' => $token['token'],
        ])->get('http://apiapp.asambleanacional.gob.ec/agendasResource/getList?sessionNumber&from&to&offset=0&limit=277');

        foreach (collect($ListaSesiones->json()) as $Sesiones){
            $Sesion = new Sesion();

            if(!Sesion::where('sesion',$Sesiones['number'])->exists()){
            $Sesion->id= $Sesiones['id'];
            $Sesion->sesion= $Sesiones['number'];
            $Sesion->initialDate= strstr($Sesiones['initialDate'], 'Z', true);;
            $Sesion->save();
            }

           // $Sesion->name= $Sesiones['name'];
        }

        $ListaTemas = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            ])->get('http://apiapp.asambleanacional.gob.ec/themesResource?id&search&sessionNumber&dateFrom&dateTo&offset=0&limit=236');
        
            foreach (collect($ListaTemas->json()) as $Temas){
                $Tema = new Tema();
    
                $Tema->id= $Temas['id'];
                $Tema->sesion_id= $Temas['agendaId'];
                $Tema->description= $Temas['description'];
                $Tema->agendaStatus= $Temas['agendaStatus'];
                if(strstr($Temas['dates'], ',', true)==0){
                    $Tema->initialDate=$Temas['dates'];
                   
                }else{
                    $Tema->initialDate= strstr($Temas['dates'], ',', true);
                }            
                $Tema->save();

            }
        $ListaTemasaVotar = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            ])->get('http://apiapp.asambleanacional.gob.ec/votingsResource/getList?id&sessionNumber&dateFrom&dateTo&search=%20&meetingGroupId=0&offset=0&limit=578');
            
            foreach (collect($ListaTemasaVotar->json()) as $TemaVotar){
                $TemaVotar = new Tema();
    
                $TemaVotar->id= $TemaVotar['1002711'];
                $TemaVotar->sesion_id= $TemaVotar['agendaId'];
                $TemaVotar->description= $TemaVotar['description'];
                $TemaVotar->agendaStatus= $TemaVotar['agendaStatus'];
                $Tema->initialDate=$TemaVotar['dates'];
                   
                $Tema->save();

            }

    return $request->user();
});


Route::get('/practica', function (Request $request) {

  

});


Route::post('Login',[AuthController::class, 'Login']);
Route::get('Perfiles',[PerfilesController::class, 'index']);

Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('ListarPerfiles',[PerfilesController::class, 'ListarPerfiles']);
    Route::get('ListarPerfileSiAsambleista',[PerfilesController::class, 'ListarPerfileSiAsambleista']);
    Route::get('ObtenerImagen',[PerfilesController::class, 'ObtenerImagen']);
    Route::get('ObtenerAsambleistaTerritorio',[PerfilesController::class, 'ObtenerAsambleistaTerritorio']);
    Route::get('ObtenerTerritorio',[PerfilesController::class, 'ObtenerTerritorio']);
    Route::post('RegistrarBiografia',[PerfilesController::class, 'RegistrarBiografia']);
    Route::get('ObtenerBiografia',[PerfilesController::class, 'ObtenerBiografia']);
    Route::get('ObtenerPerfil',[PerfilesController::class, 'ObtenerPerfil']);

    Route::post('CrearBlog',[BlogsController::class, 'CrearBlog']);
    Route::get('ListarCateBlog',[BlogsController::class, 'ListarCateBlog']);


    Route::get('ListarUsuariosAsambleistas',[CuentaController::class, 'ListarUsuariosAsambleistas']);
    Route::get('ListarUsuariosAsistentes', [CuentaController::class, 'ListarUsuariosAsistentes']);
    Route::get('ListarUsuariosAdministrador', [CuentaController::class, 'ListarUsuariosAdministrador']);
    Route::get('ListarUserPorRol', [CuentaController::class, 'ListarUserPorRol']);
    Route::get('ListarRoles', [CuentaController::class, 'ListarRoles']);
    

    Route::post('Register',[AuthController::class, 'Register']);
    Route::post('Logout',[AuthController::class, 'Logout']);
    Route::post('Update',[AuthController::class, 'Update']);
});



//Route::get('Asambleistas',[CuentasController::class, 'index']);
