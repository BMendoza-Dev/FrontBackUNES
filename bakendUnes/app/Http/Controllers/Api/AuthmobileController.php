<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\MobileUser;
use App\Models\OauthAccessToken;
use Cookie;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AuthmobileController extends Controller
{
    public function Register(Request $request){
        $validatedData = $request->validate([
            'identificador' => 'required|string|max:255',
            'email' => 'required|string|email|unique:mobile_users|max:255',
            'password' => 'required|string|min:6|max:255',
        ]);
    
        // Crea un nuevo usuario de la aplicación móvil
        $mobileUser = MobileUser::create([
            'identificador' => $validatedData['identificador'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);
    
        // Crea un token de acceso para el usuario
        $accessToken = $mobileUser->createToken('mobile')->accessToken;
    
        // Retorna la respuesta
        return response()->json(['user' => $mobileUser, 'access_token' => $accessToken]);
    }

    public function Login(Request $request){
        
        $user = MobileUser::where('identificador', $request->identificador)->first();

    if (!$user) {
        $validatedData = $request->validate([
            'identificador' => 'required|string|max:255',
            'email' => 'required|string|email|unique:mobile_users|max:255',
            'password' => 'required|string|min:6|max:255',
        ]);

        // Crea un nuevo usuario de la aplicación móvil
        $mobileUser = MobileUser::create([
            'identificador' => $validatedData['identificador'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);
    
        // Crea un token de acceso para el usuario
       
    }
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6|max:255',
        ]);
    
        // Intenta autenticar al usuario utilizando la guardia 'mobile'
        if (!auth()->guard('mobile')->attempt($validatedData)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
    
        // Recupera el usuario autenticado
        $mobileUser = auth()->guard('mobile')->user();
    
        // Crea un token de acceso para el usuario
        $token = $mobileUser->createToken('mobile')->plainTextToken;

        $tokenexpire= OauthAccessToken::where('tokenable_id',$mobileUser->id)->get()->last();
        $tokenexpire->expires_at=Carbon :: now ( )->addHour(24);
        $tokenexpire->update();
        $cookie = cookie('cookie_token',$token,60*1);
    
        // Retorna la respuesta
        return response(['token'=>$token, 'usuario'=>$mobileUser,'menssage'=>'Login correcto','code'=>'200'])->withoutCookie($cookie);
    }
}
