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
use Illuminate\Support\Facades\Validator;
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
        $user->estado=$request->estado;
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
            $userAuth= Auth::user()->where('email',$request->email)->with('rol')->get();
            $token= $user->createToken('token')->plainTextToken;

            $tokenexpire= OauthAccessToken::where('tokenable_id',$userAuth[0]->id)->get()->last();
            $tokenexpire->expires_at=Carbon :: now ( )->addHour(2);
            $tokenexpire->update();

            $cookie = cookie('cookie_token',$token,60*1);
            return response(['token'=>$token, 'usuario'=>$userAuth])->withoutCookie($cookie);
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json(['menssage'=>'Login correcto']);
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
