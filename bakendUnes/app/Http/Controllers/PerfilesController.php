<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Hash;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\User;
use App\Models\Biografia;
use App\Models\Comision;
use App\Models\localizacion;
use App\Models\Divisionterritorial;
use App\Models\Categorie;
use App\Models\Permisos;
use App\Models\Roles;
use Illuminate\Support\Facades\Gate;
class PerfilesController extends Controller
{


    public function index()
    {
        set_time_limit(300000);
        $validacion= Perfil::get();
        if(!$validacion->isEmpty()){
            return response()->json("Perfiles Cargados en la base de datos.");;
        }
        $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
            'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
            'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
        ]);
        $token = $tokenapi->json();
        Categorie::insert([
            ['categorianame' => 'Agenda'],
            ['categorianame' => 'Opinion'],
            ['categorianame' => 'Entrevistas'],
            ['categorianame' => 'Fizcalisamos'],
            ['categorianame' => 'Legislamos'],
        ]);
    
        Permisos::insert([
            [
                'nombre' => 'Seccion inicio',
                'slug' => 'inicio',
                'descripcion' => 'Accede a la vista de inicio',
            ],
            [
                'nombre' => 'Appmobile',
                'slug' => 'appmobile',
                'descripcion' => 'Acceso a la app mobile',
            ],
            [
                'nombre' => 'Registrador de Usuarios',
                'slug' => 'RegiterUser',
                'descripcion' => 'Accede a la seccion de registro de usuarios en sus diferentes niveles',
            ],
            [
                'nombre' => 'Actualizador de Usuarios',
                'slug' => 'UpdateUser',
                'descripcion' => 'Puede actualizar usuarios en los diferentes niveles (le aparece el boton de editar)',
            ],
            [
                'nombre' => 'Ve los usuarios registrado',
                'slug' => 'ViewUser',
                'descripcion' => 'Puede ver todos los usuarios registrados y su informacion',
            ],
            [
                'nombre' => 'Aprobardor o denegardor blogs en ultimas noticias',
                'slug' => 'AprobarBlogs',
                'descripcion' => 'tiene permisos para acceder a las vistas para aprobar o denegar blogs para que aparezcan en la seccion de ultimas noticias de la aplicacion',
            ],
            [
                'nombre' => 'Ve lista de blogs en ultimas noticias',
                'slug' => 'listarblogsporaprobar',
                'descripcion' => 'tiene permisos para acceder a las vistas para ver blogs que estan a la espera de ser aprobados a para que aparezcan en ultimas noticias',
            ],
            [
                'nombre' => 'Ve lista de blogs aprobados en noticias',
                'slug' => 'listarblogsaprobados',
                'descripcion' => 'tiene permisos para acceder a las vistas para ver blogs que estan aprobados para que aparezcan en ultimas noticias',
            ],
            [
                'nombre' => 'Creador de blogs',
                'slug' => 'creadorDeBlogs',
                'descripcion' => 'tiene permisos para acceder a las vistas para crear blogs',
            ],
            [
                'nombre' => 'Ver blogs creados',
                'slug' => 'VerBlogs',
                'descripcion' => 'tiene permisos para acceder a las vistas ver los blogs',
            ],
            [
                'nombre' => 'Editor de blogs',
                'slug' => 'EditaBlogs',
                'descripcion' => 'tiene permisos para acceder a las vistas de editar blos',
            ],
        ]);
    
        $superAdmin = [
            'nombre' => 'Super Administrador',
            'slug' => 'super_administrador',
            'descripcion' => 'Tiene acceso a todo',
            'fullacceso' => 'yes',
        ];
        
        $asambleista = [
            'nombre' => 'Asambleista',
            'slug' => 'asambleista',
            'descripcion' => 'Tiene acceso a las opciones de los Asambleistas',
            'fullacceso' => 'no',
        ];
        
        $asistente = [
            'nombre' => 'Asistente',
            'slug' => 'asistente',
            'descripcion' => 'Tiene acceso a las opciones de los Asistentes',
            'fullacceso' => 'no',
        ];
        
        $superAdmin = Roles::create($superAdmin);
        $superAdmin->permisos()->sync([1,3,4,5,6,7,8,9,10,11]);
        
        $asambleista = Roles::create($asambleista);
        $asambleista->permisos()->sync([1,9,10,11]);
        
        $asistente = Roles::create($asistente);
        $asistente->permisos()->sync([1,9,10,11]);
        
     //   $roles = [$superAdmin, $asambleista, $asistente];
        
       // Roles::insert($roles);
           

        $Ambitoterritorial = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            ])->get('http://apiapp.asambleanacional.gob.ec/periodsResource/territorialDivision/');


        foreach (collect($Ambitoterritorial->json()) as $Ambitoterritorialaux){
            $territorial = new Divisionterritorial();

            $territorial->id= $Ambitoterritorialaux['id'];
            $territorial->name= $Ambitoterritorialaux['name'];
            $territorial->save();
        }

        $Comisiones = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            ])->get('http://apiapp.asambleanacional.gob.ec/periodsResource/6/meetingGroups/2');

        foreach (collect($Comisiones->json()) as $Comisionesaux){
            $Comision = new Comision();

            $Comision->id= $Comisionesaux['id'];
            $Comision->name= $Comisionesaux['name'];
            $Comision->save();
        }

        
        

        $Perfiles2 = new Perfil();
        $Perfiles2->id=1;
        $Perfiles2->active=1;
        $Perfiles2->curul=0;
        $Perfiles2->firstName='UNES';
        $Perfiles2->email='superadmin@hotmail.com';
        $Perfiles2->jurisdiction='ECUADOR';
        $Perfiles2->lastName='UNION POR LA ESPERANZA';
        $Perfiles2->politicalParty='UNES';
        $Perfiles2->territorialDivision='ECUADOR';
        $Perfiles2->usedFirstName='UNION POR LA ESPERANZA';
        $Perfiles2->usedLastName='UNION POR LA ESPERANZA';

        $rolid = Roles::where('slug','super_administrador')->firstOrFail();
        $urlimagenes=[];
    $urlimagenes[]['imagen']="12j3h1j2n31kn23k1nk";
        $Perfiles2->save();
        $Perfiles2->image()->createMany($urlimagenes);


        User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@hotmail.com',
            'estado'=> 1,
            'password' =>Hash::make('12345678'),
            'perfil_id'=>1
        ])->roles()->sync([$rolid->id]); 

        

        $request = Http::withHeaders([
        'Content-Type' => 'application/jason',
        'Authorization' => $token['token'],
        ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/findnew/6/0/0/false/false/false/0/0/0/0');


        $asambleistas= collect($request->json());
        $filtered = $asambleistas->whereIn('politicalParty', ["UNIÓN POR LA ESPERANZA"])->whereIn("active",[true]);

        


        foreach ($filtered as $asambleista) {
            $aux=((string)$asambleista["id"]);
           
            $request2 = Http::withHeaders([
                'Content-Type' => 'application/jason',
                'Authorization' => $token['token'],
                //'Content-Disposition'=> 'attachement',
                ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/getPhoto/'.$aux);

                $urlimagenes2=[];
                $urlimagenes2['imagen']=['imagen' => $request2 ];

                
            $Perfiles = new Perfil();

            $Perfiles->id=$asambleista["id"];
            $Perfiles->active=$asambleista["active"];
            $Perfiles->curul=$asambleista["curul"];
            $Perfiles->firstName=$asambleista["firstName"];
            $Perfiles->email=$asambleista["email"];
            $Perfiles->jurisdiction=$asambleista["jurisdiction"];
            $Perfiles->lastName=$asambleista["lastName"];
            $Perfiles->politicalParty=$asambleista["politicalParty"];
            $Perfiles->territorialDivision=$asambleista["territorialDivision"];
            $Perfiles->usedFirstName=$asambleista["usedFirstName"];
            $Perfiles->usedLastName=$asambleista["usedLastName"];
            
            $Perfiles->image()->createMany($urlimagenes2);
            
            
            $Perfiles->save();

            if(!empty($asambleista["locationDto"])){
                $localizacionserver= [];
                if(!empty($asambleista["locationDto"]["city"])){
                    $localizacionserver['city']=$asambleista["locationDto"]["city"];
                }else{
                    $localizacionserver['city']=null;
                }
                if(!empty($asambleista["locationDto"]["edifice"])){
                    $localizacionserver['edifice']=$asambleista["locationDto"]["edifice"];
                }else{
                    $localizacionserver['edifice']=null;
                }
                if(!empty($asambleista["locationDto"]["floor"])){
                    $localizacionserver['floor']=$asambleista["locationDto"]["floor"];
                }else{
                    $localizacionserver['floor']=null;
                }
                if(!empty($asambleista["locationDto"]["office"])){
                    $localizacionserver['office']=$asambleista["locationDto"]["office"];
                }else{
                    $localizacionserver['office']=null;
                }
                if(!empty($asambleista["locationDto"]["phone"])){
                    $localizacionserver['phone']=$asambleista["locationDto"]["phone"];
                }else{
                    $localizacionserver['phone']=null;
                }
                $localizacion= localizacion::create($localizacionserver);
                
                $Perfiles->localizacion_id=$localizacion->id;
                $Perfiles->update();
            }
            
            
        }

        
        $ListaComi= Comision::all();
        $ListadePerfiles= Perfil::all();
        foreach ($ListaComi as $Comi) {
            $AsamXComision = Http::withHeaders([
                'Content-Type' => 'application/jason',
                'Authorization' => $token['token'],
                ])->get('http://apiapp.asambleanacional.gob.ec/meetingGroupsResource/'.$Comi->id.'/assemblyMembersNoPicNew/');
            $listaAsambleXComision = collect($AsamXComision->json());
        foreach ($listaAsambleXComision as $AsambleXComision) {
            $auxPerfil= $ListadePerfiles->firstWhere('id',$AsambleXComision['id']);
            if( $auxPerfil!=null){
                $auxPerfil->comisiones()->save($Comi,['roleName' => $AsambleXComision['roleName']]);

            }
            
         }
       
        }

        
        
        //dd($aux2);
        
        return response()->json("Perfiles Cargados en la base de datos.");;
    }

    public function ListarPerfiles (){
        $validacion= Perfil::where('active',1)->with('image')->with('localizacion')->get();
       
        return response()->json($validacion);
    }

    public function ListarPerfileSiAsambleista (){
        $validacion= Perfil::where('active',1)->select(['id','firstName', 'lastName'])->doesntHave('user')->get();
       
        return response()->json($validacion);
    }

    public function ObtenerImagen (Request $request){
     
        $datos=Perfil::where('id', $request->id)->with('image')->get();

      // dd($datos[0]->image['imagen']);
        return  response()->json($datos[0]->image);
    }

    public function ObtenerAsambleistaTerritorio (Request $request){
       
        $datos=Perfil::where('territorialDivision', $request->territorialDivision)->with('image')->get();

        return  response()->json($datos);
    }

    public function ObtenerTerritorio (){
     
        $datos=Divisionterritorial::get();

       
        return  response()->json($datos);
    }


    public function RegistrarBiografia (Request $request){
        $Perfiles= Perfil::findOrFail($request->id);
        $data=[];

       
    
        if($request->urlfb!=null){
            $data['urlfb']= $request->urlfb;
        }
    
        if($request->urltw!=null){
            $data['urltw']= $request->urltw;
        }
    
        if($request->urlit!=null){
            $data['urlit']= $request->urlit;
        }
    
        if($request->urlttk!=null){
            $data['urlttk']= $request->urlttk;
        }
    
        if($request->perfil!=null){
            $data['perfil']= $request->perfil;
        }
    
        if($Perfiles->biografia_id==null){
            $biografia= Biografia::create($data);
            $Perfiles->biografia_id=$biografia->id;
            if($request->imagen!=null){
                $urlimagenes2=[];
                $urlimagenes2['imagen']=['imagen' => base64_decode($request->imagen) ];
                $biografia->image()->createMany($urlimagenes2);
            }
            $Perfiles->update();

        }else{
          
            if($data!=null){
                $Perfiles->biografia()->update($data);
             }
            
            if($request->imagen!=null){
                $urlimagenes2=[];
                $urlimagenes2['imagen']=['imagen' =>  base64_decode($request->imagen)];
             
                $Perfiles->load(['biografia'  => function ($query) use ($urlimagenes2) {
                    $query->with(['image'=> function ($query) use ($urlimagenes2) {
                        $query->update( $urlimagenes2['imagen']);
                    }]);
                }]);
            }
        }

        return  response()->json("200");
        
    }

    public function ObtenerBiografia (Request $request){
        $Perfilesfinal= Perfil::where('id',$request->id)->with(['biografia'=> function ($query){
            $query->with('image');
        }])->get();

        
        if($Perfilesfinal[0]->biografia_id==null){
            return  response()->json(['error'=>'404']);
        }
        return  response()->json($Perfilesfinal[0]->biografia);
           
     }

     public function ObtenerPerfil (Request $request){
        $Perfilesfinal= Perfil::where('id',$request->id)->with('image')->with('localizacion')->with('comisiones')->get();

        
        if($Perfilesfinal->isEmpty()){
            return  response()->json(['error'=>'404']);
        }
        return  response()->json($Perfilesfinal[0]);
           
     }
     
}

