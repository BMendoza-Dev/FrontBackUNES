<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PerfilesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\VotacionesController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\EditorialController;
use App\Http\Controllers\Api\AuthmobileController;
use App\Http\Controllers\AppMobile\PerfilesControllerAppMobile;
use App\Http\Controllers\AppMobile\BlogAppController;
use App\Http\Controllers\VideosController;

use App\Http\Controllers\Padron\PaisController;
use App\Http\Controllers\Padron\CantonesController;
use App\Http\Controllers\Padron\CircunscripcionesController;
use App\Http\Controllers\Padron\DistritosController;
use App\Http\Controllers\Padron\ParroquiasController;
use App\Http\Controllers\Padron\ProvinciaController;
use App\Http\Controllers\Padron\ZonasController;
use App\Http\Controllers\Padron\PadronController;
use App\Http\Controllers\Padron\PadronelectoralsController;
use App\Http\Controllers\Padron\DelegadosProvincialesController;



use App\Models\Biografia;
use App\Models\Perfil;
use App\Models\Sesion;
use App\Models\Tema;
use App\Models\Blog;
use App\Models\Temaavotacion;
use Carbon\Carbon;



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

Route::get('/prueva2', function (Request $request) {

    set_time_limit(900000);

    $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
        'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
        'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
    ]);

    $token = $tokenapi->json();
    foreach (Perfil::whereNotIn('id', [1])->get() as $Perfil){

        $ListadeVotacionesAsambleista = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/findVotings?periodId=7&assemblyMemberId='.$Perfil->id.'&description&offset=0&limit=0');
        
        foreach (collect($ListadeVotacionesAsambleista->json()) as $VotacionAsambleista){
            if(Temaavotacion::where('id',$VotacionAsambleista['id'])->exists()){
                $Perfil->Temaavotaciones()->attach([$VotacionAsambleista['id']=>['voto'=>$VotacionAsambleista['description']]]);
            }

            
        }


     }

    return '200';

 });

Route::get('/prueva', function (Request $request) {

    
    $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
        'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
        'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
    ]);

    $token = $tokenapi->json();

    $ListaSesiones = Http::withHeaders([
        'Content-Type' => 'application/jason',
        'Authorization' => $token['token'],
        ])->get('http://apiapp.asambleanacional.gob.ec/votingsResource/getList?id&sessionNumber&dateFrom=2023-11-17&dateTo&search=%20&meetingGroupId=0&offset=0&limit=0');


        foreach (collect($ListaSesiones->json()) as $Sesiones){
            $Sesion = new Sesion();
            if(!Sesion::where('sesion',$Sesiones['agendaNumber'])->exists()){
                $Sesion->id= $Sesiones['agendaId'];
                $Sesion->sesion= $Sesiones['agendaNumber'];
                $Sesion->initialDate=Carbon::parse(strstr($Sesiones['agendaDate'], 'Z', true))->format('Y-m-d H:i:s');
                $Sesion->save();
                }

            $Tema = new Tema();
                if(!Tema::where('id',$Sesiones['themeId'])->exists()){
                $Tema->id= $Sesiones['themeId'];
                $Tema->sesion_id= $Sesiones['agendaId'];
                $Tema->description= $Sesiones['themeDescription'];
                
                if(strstr($Sesiones['agendaDate'], 'T', true)==0){
                    $Tema->initialDate=Carbon::parse($Sesiones['agendaDate'])->format('Y-m-d H:i:s');
                   
                }else{
                    $Tema->initialDate= Carbon::parse(strstr($Sesiones['agendaDate'], 'Z', true))->format('Y-m-d H:i:s');
                }            
                $Tema->save();
                 }
            
                 $TemaVotar = new Temaavotacion();
        
                 $TemaVotar->id= $Sesiones['votingId'];
                 $TemaVotar->description= $Sesiones['description'];
                 $TemaVotar->initialDate= Carbon::parse(strstr($Sesiones['date'], 'Z', true))->format('Y-m-d H:i:s') ;
                 $TemaVotar->tema_id=  $Sesiones['themeId'];
                    
                 $TemaVotar->save();
         }

   

  /*      $ListaSesiones = Http::withHeaders([
        'Content-Type' => 'application/jason',
        'Authorization' => $token['token'],
        ])->get('http://apiapp.asambleanacional.gob.ec/agendasResource/getList?sessionNumber&from&to&offset=0&limit=280');

        foreach (collect($ListaSesiones->json()) as $Sesiones){
            $Sesion = new Sesion();

            if(!Sesion::where('sesion',$Sesiones['number'])->exists()){
            $Sesion->id= $Sesiones['id'];
            $Sesion->sesion= $Sesiones['number'];
            $Sesion->initialDate= strstr($Sesiones['initialDate'], 'Z', true);;
            $Sesion->save();
            }
            foreach ($Sesiones['list'] as $ListaTemas){
                $Tema = new Tema();
                if(!Tema::where('id',$ListaTemas['id'])->exists()){
                $Tema->id= $ListaTemas['id'];
                $Tema->sesion_id= $Sesiones['id'];
                $Tema->description= $ListaTemas['description'];
                
                if(strstr($ListaTemas['startdate'], 'T', true)==0){
                    $Tema->initialDate=$ListaTemas['startdate'];
                   
                }else{
                    $Tema->initialDate= strstr($ListaTemas['startdate'], 'T', true);
                }            
                $Tema->save();
                 }

                 foreach ($ListaTemas['list'] as $TemasVotar){
                    $TemaVotar = new Temaavotacion();
        
                    $TemaVotar->id= $TemasVotar['id'];
                    $TemaVotar->description= $TemasVotar['description'];
                    $TemaVotar->initialDate= strstr($TemasVotar['startdate'], 'T', true);
                    $TemaVotar->temas_id=  $ListaTemas['id'];
                       
                    $TemaVotar->save();
    
                }

                

             }
        }*/


        
        
        
});


Route::get('/pruevapdf', function (Request $request) {
    
    $blog= Blog::find($request->id);
    return response($blog->load('pdf'));
    return response($blog->load('pdf')->pdf[$request->num]->pdf, 200)
        ->header('Content-Type', 'application/pdf');
});


Route::post('Login',[AuthController::class, 'Login']);

Route::get('Perfiles',[PerfilesController::class, 'index']);

Route::get('CargarPaises',[PaisController::class, 'CargarPaises']);
Route::get('consultarAdherentePermanente',[PadronController::class, 'consultarAdherentePermanente']);
Route::get('CrucePadronAdherentes',[PadronController::class, 'CrucePadronAdherentes']);
Route::get('validarcedula',[PadronController::class, 'validarcedula']);
Route::get('DataEmpadronado',[PadronController::class, 'DataEmpadronado']);



Route::get('import',[PaisController::class, 'import']);

Route::get('CargarCantones',[CantonesController::class, 'CargarCantones']);
Route::get('CargarCircunscripciones',[CircunscripcionesController::class, 'CargarCircunscripciones']);
Route::get('CargarDistritos',[DistritosController::class, 'CargarDistritos']);
Route::get('CargarParroquias',[ParroquiasController::class, 'CargarParroquias']);
Route::get('CargarProvincias',[ProvinciaController::class, 'CargarProvincias']);
Route::get('CargarZonas',[ZonasController::class, 'CargarZonas']);
Route::get('CargarPadronElectoral',[PadronelectoralsController::class, 'CargarPadronElectoral']);
Route::get('ActualizarAdherentesPadronElectoral',[PadronelectoralsController::class, 'ActualizarAdherentesPadronElectoral']);
Route::get('Todaldedatos',[PadronelectoralsController::class, 'Todaldedatos']);
Route::get('Leerjson',[PadronelectoralsController::class, 'Leerjson']);
Route::get('ConsultaDelegadosProvinciales',[DelegadosProvincialesController::class, 'ConsultaDelegadosProvinciales']);


Route::get('generarJsonSegunProvincia',[PadronelectoralsController::class, 'generarJsonSegunProvincia']);
Route::get('CargarPadron2023',[PadronelectoralsController::class, 'CargarPadron2023']);
Route::get('consultarAdherenteEnPadron',[PadronelectoralsController::class, 'consultarAdherenteEnPadron']);
Route::get('CargarCicunsOProvincia',[PadronelectoralsController::class, 'CargarCicunsOProvincia']);
Route::get('Listar_Can_Pais_Cicunscripcion_Pais',[PadronelectoralsController::class, 'Listar_Can_Pais_Cicunscripcion_Prov']);
Route::get('Listar_Parroquia_estado_Canton_Pais',[PadronelectoralsController::class, 'Listar_Parroquia_estado_Canton_Pais']);
Route::get('RegistrarTipoAdherenteYRedes',[PadronelectoralsController::class, 'RegistrarTipoAdherenteYRedes']);
Route::get('RegistrarDatosAdherenteYRedes',[PadronelectoralsController::class, 'RegistrarDatosAdherenteYRedes']);
Route::get('eliminarRegistrosPorProvinciaYAdherenteNulo',[PadronelectoralsController::class, 'eliminarRegistrosPorProvinciaYAdherenteNulo']);
Route::get('obtenerCedulasDuplicadasConAdherenteNulo',[PadronelectoralsController::class, 'obtenerCedulasDuplicadasConAdherenteNulo']);


Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('ListarPerfiles',[PerfilesController::class, 'ListarPerfiles']);
    Route::get('ListarPerfileSiAsambleista',[PerfilesController::class, 'ListarPerfileSiAsambleista']);
    Route::get('ObtenerImagen',[PerfilesController::class, 'ObtenerImagen']);
    Route::get('ObtenerAsambleistaTerritorio',[PerfilesController::class, 'ObtenerAsambleistaTerritorio']);
    Route::get('ObtenerTerritorio',[PerfilesController::class, 'ObtenerTerritorio']);
    Route::post('RegistrarBiografia',[PerfilesController::class, 'RegistrarBiografia']);
    Route::get('ObtenerBiografia',[PerfilesController::class, 'ObtenerBiografia']);
    Route::get('ObtenerPerfil',[PerfilesController::class, 'ObtenerPerfil']);
    Route::post('CrearPerfil',[PerfilesController::class, 'CrearPerfil']);

    Route::post('CrearBlog',[BlogsController::class, 'CrearBlog']);
    Route::get('ListarCateBlog',[BlogsController::class, 'ListarCateBlog']);
    Route::get('EliminadoLogicoCategoria',[BlogsController::class, 'EliminadoLogicoCategoria']);
    Route::get('ListarBlogPorCat',[BlogsController::class, 'ListarBlogPorCat']);
    Route::get('ListarBlogsPorAprobar',[BlogsController::class, 'ListarBlogsPorAprobar']);
    Route::get('ListarBlogsImportantesSemana',[BlogsController::class, 'ListarBlogsImportantesSemana']);
    Route::get('ObtenerBlog',[BlogsController::class, 'ObtenerBlog']);
    Route::get('make_notify_read',[BlogsController::class, 'make_notify_read']);
    Route::get('make_notify_read_all',[BlogsController::class, 'make_notify_read_all']);
    Route::get('ObtenerBlogPorPerfil',[BlogsController::class, 'ObtenerBlogPorPerfil']);
    Route::get('EliminadoLogicoBlog',[BlogsController::class, 'EliminadoLogicoBlog']);
    Route::post('AprobarBlogEnUltimaNoticias',[BlogsController::class, 'AprobarBlogEnUltimaNoticias']);
    Route::post('CreateCategoria',[BlogsController::class, 'CreateCategoria']);
    Route::post('EditCategoria',[BlogsController::class, 'EditCategoria']);

    Route::post('CrearEditorial',[EditorialController::class, 'CrearEditorial']);
    Route::post('EditarEditorial',[EditorialController::class, 'EditarEditorial']);
    Route::get('ListarEditorial',[EditorialController::class, 'ListarEditorial']);
    Route::get('ListarBlogsPorEditorial',[EditorialController::class, 'ListarBlogsPorEditorial']);

    Route::get('ListarUsuariosAsambleistas',[CuentaController::class, 'ListarUsuariosAsambleistas']);
    Route::get('ListarUsuariosAsistentes', [CuentaController::class, 'ListarUsuariosAsistentes']);
    Route::get('EliminadoLogicoUsuario',[BlogsController::class, 'EliminadoLogicoUsuario']);
    Route::get('ListarUsuariosAdministrador', [CuentaController::class, 'ListarUsuariosAdministrador']);
    Route::get('ListarUserPorRol', [CuentaController::class, 'ListarUserPorRol']);
    Route::get('ListarRoles', [CuentaController::class, 'ListarRoles']);

    Route::get('ListarVideos',[VideosController::class, 'index']);
    Route::post('AgregarVideo',[VideosController::class, 'AgregarVideo']);
    Route::post('EditarVideo',[VideosController::class, 'EditarVideo']);
    Route::get('EliminarVideo',[VideosController::class, 'EliminarVideo']);
    
    

    Route::post('Register',[AuthController::class, 'Register']);
    Route::get('Notifique',[AuthController::class, 'Notifique']);
    Route::post('Logout',[AuthController::class, 'Logout']);
    Route::post('Update',[AuthController::class, 'Update']);
});
Route::post('LoginAppMobile',[AuthmobileController::class, 'Login']);

Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('ObtenerBiografiaApp',[PerfilesControllerAppMobile::class, 'ObtenerBiografia']);
    Route::get('ListarPerfilesApp',[PerfilesControllerAppMobile::class, 'ListarPerfiles']);
    Route::get('ObtenerTerritorioApp',[PerfilesControllerAppMobile::class, 'ObtenerTerritorio']);   
    Route::get('ObtenerAsambleistaTerritorioApp',[PerfilesControllerAppMobile::class, 'ObtenerAsambleistaTerritorio']);
    Route::get('ObtenerPerfilApp',[PerfilesControllerAppMobile::class, 'ObtenerPerfil']);
    Route::get('listarVotacionesAsambleistaApp',[VotacionesController::class, 'listarVotacionesAsambleista']);
    Route::get('ListarBlogUltimaNoticiaApp',[BlogAppController::class, 'ListarBlogUltimaNoticiaApp']);

    Route::get('ListarPdfBlogApp',[BlogAppController::class, 'ListarPdfBlogApp']);
    Route::get('ObtenerBlogApp',[BlogAppController::class, 'ObtenerBlogApp']);
    Route::get('ListarEditorialApp',[BlogAppController::class, 'ListarEditorialApp']);
    Route::get('ListarBlogsPorEditorialApp',[BlogAppController::class, 'ListarBlogsPorEditorialApp']);

    Route::get('AddVisitaVisitanteBlog', [BlogAppController::class, 'AddVisitaVisitanteBlog']);
    Route::get('obtenerBlogsByVisitorsCount', [BlogAppController::class, 'obtenerBlogsByVisitorsCount']);

    Route::get('NotifiqueUserApp',[AuthmobileController::class, 'NotifiqueUserApp']);
    Route::get('make_notify_read_AppMobile',[AuthmobileController::class, 'make_notify_read_AppMobile']);
    Route::get('make_notify_read_all_AppMobile',[AuthmobileController::class, 'make_notify_read_all_AppMobile']);
    
    Route::get('ListarCategoriasPerfilBlogs',[BlogAppController::class, 'ListarCategoriasPerfilBlogs']);
    Route::get('ListarBlogsPorPerfilCategoria',[BlogAppController::class, 'ListarBlogsPorPerfilCategoria']);
    Route::get('ListarBlogsAgenda',[BlogAppController::class, 'ListarBlogsAgenda']);
    
});




Route::middleware('auth:mobile_users')->get('/app', function (Request $request) {
    return $request->user();
});

Route::post('message/send',[BlogsController::class, 'send'])
    ->name('api.message.send');

Route::post('message/sendDM',[BlogsController::class, 'sendDM'])
    ->name('api.message.sendDM');



//Route::get('Asambleistas',[CuentasController::class, 'index']);
