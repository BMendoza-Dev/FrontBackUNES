<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Cookie;
class AuthController extends Controller
{
    public function Register(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required'    
        ]);

        $user= new User();

        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->perfil_id=$request->perfil_id;
        $user->rol_id=$request->rol_id;
        $user->save();

        return response()->json(['menssage'=>'registro correcto']);
    }

    public function Login(Request $request){

        $credentials= $request->validate([
            'email'=>['required','email'],
            'password'=>['required']    
        ]);

        if(Auth::attempt($credentials)){
            $user=Auth::user();
            $token= $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token',$token,60*1);
            return response(['token'=>$token, 'usuario'=>Auth::user()->with('rol')->get()])->withoutCookie($cookie);
        }else{
            return response("401");
        }
        return response()->json(['menssage'=>'Login correcto']);
    }

    public function Logout(){
        $cookie = Cookie::forget('cookie_token');
    //    $this->user->token()->revoke();
        return response(['menssage'=>'logout correcto'])->withCookie($cookie);
    }

    public function UserPerfil(Request $request){
        return response()->json(['menssage'=>'usuarios correcto']);
    }
}
