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
use App\Models\localizacion;
use App\Models\Divisionterritorial;
class PerfilesController extends Controller
{

    public $x;
    public function index()
    {
        $validacion= Perfil::get();
        if(!$validacion->isEmpty()){
            return response()->json("Perfiles Cargados en la base de datos.");;
        }
        $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
            'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
            'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
        ]);

        $token = $tokenapi->json();

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
       // $biografia=[];
       // $biografia['urlfb']="asdasd";
      //  $biografia[]['urltw']="adsasd";
       // $biografia[]['urlit']="sadasda";
        //$biografia[]['urlttk']="asdsad";
        //$biografia[]['perfil']="asdasd";
        
        $urlimagenes=[];
    $urlimagenes[]['imagen']="12j3h1j2n31kn23k1nk";
        $Perfiles2->save();
       // $Perfiles2->biografia()->create($biografia);
        $Perfiles2->image()->createMany($urlimagenes);

        $user= new User();
        $user->name='Super Admin';
        $user->email='superadmin@hotmail.com';
        $user->estado=1;
        $user->password=Hash::make('12345678');
        $user->perfil_id=1;
        $user->rol_id=1;
        $user->save();

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
           // $Imagen = new Imagenes();
            //$Imagen->save();
          //  $Imagen->imagen=$request2;
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
            
           
            
           // $Perfiles->Imagen()->create($imagen);
           
           // $aux4 = Imagen::latest('id')->first();;
           // dd($aux4);
          //  $Perfiles->imagen_id=$aux4->id;
     //     $biografia=[];
       // $biografia['urlfb']="asdasd";
        //$biografia['urltw']="adsasd";
        //$biografia['urlit']="sadasda";
        //$biografia['urlttk']="asdsad";
        //$biografia['perfil']="asdasd";
          //$Perfiles->biografia()->create($biografia);
          
            
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

        //dd($aux2);
        
        return response()->json("Perfiles Cargados en la base de datos.");;
    }

    public function ListarPerfiles (){
        $validacion= Perfil::where('active',1)->with('image')->with('localizacion')->get();
       
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
}

