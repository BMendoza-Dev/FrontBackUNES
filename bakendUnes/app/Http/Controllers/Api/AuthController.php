<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use App\Models\OauthAccessToken;
use Cookie;
use App\Models\Roles;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;
class AuthController extends Controller
{
    
    public function Register(Request $request){
        if(Gate::check('haveacceso','CrearBlog')==false){
            return response()->json('403');
        };
        $request->validate([
            'name'=>'required',
            'email'=>'required||unique:user,email',
            'password'=>'required'    
        ]);

        $user= new User();
        
        $rolid = Roles::where('id',$request->rol_id)->firstOrFail();
        
        User::create([
            'name' =>$request->name ,
            'email' =>$request->email,
            'estado'=> $request->estado,
            'password' =>Hash::make($request->password),
            'perfil_id'=>$request->perfil_id
        ])->roles()->sync([ $rolid->id]); 


        return response()->json(['menssage'=>'registro correcto']);
    }

    public function Login(Request $request){

        $credentials= $request->validate([
            'email'=>['required','email'],
            'password'=>['required']    
        ]);

        if(Auth::attempt($credentials)){
            $user=Auth::user();
            $userAuth= Auth::user()->where('email',$request->email)->with('roles')->get();
            $token= $user->createToken('token')->plainTextToken;

            $tokenexpire= OauthAccessToken::where('tokenable_id',$userAuth[0]->id)->get()->last();
            $tokenexpire->expires_at=Carbon :: now ( )->addHour(2);
            $tokenexpire->update();

            $cookie = cookie('cookie_token',$token,60*1);
            return response(['token'=>$token, 'usuario'=>$userAuth,'menssage'=>'Login correcto','code'=>'200'])->withoutCookie($cookie);
        }else{
            return response()->json(['error' => 'Unauthorized','code'=>'401']);
        }
        return response()->json(['menssage'=>'Login correcto','code'=>'200']);
    }

    public function Logout(Request $request){
        
        $cookie = Cookie::forget('cookie_token');
        $userAuth= User::where('email',$request->email)->get();    
        $token= OauthAccessToken::where('tokenable_id',$userAuth[0]->id)->get()->last();    
         $token->expires_at= Carbon :: now ( ) -> toDateTimeString ( );
         $token->update();
        return response(['menssage'=>'logout correcto'])->withCookie($cookie);
    }

    public function Update(Request $request){
        $validator = Validator::make($request->all(), [
            'email'=>'required|email|unique:users',
        ]);

        $user = User::findOrFail($request->id);
        if (!$validator->fails()) {
            $user->email=$request->email;
        }
        
        $user->name=$request->name;
        $user->estado=$request->estado;
        if(!$request->password==null){
            $user->password=Hash::make($request->password);
        }
        $user->perfil_id=$request->perfil_id;
        $user->update();


        return response()->json(['menssage'=>'usuarios actualizado correctamente']);
    }

    public function Delete(Request $request){ 
        
    }
}
