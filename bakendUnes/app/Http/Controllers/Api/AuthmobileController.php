<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\MobileUser;
use App\Models\OauthAccessToken;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use Cookie;
use App\Events\EventNotifyUsersApp;
use App\Notifications\NotifyUsersApp;
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
        if (!Auth::guard('mobile_users')->attempt($validatedData)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
        // Recupera el usuario autenticado
        $mobileUser = auth()->guard('mobile_users')->user();
    
        // Crea un token de acceso para el usuario
        $token = $mobileUser->createToken('mobile_users')->plainTextToken;

        $cookie = cookie('cookie_token',$token,60*1);
    
        // Retorna la respuesta
        return response(['token'=>$token, 'usuario'=>$mobileUser,'menssage'=>'Login correcto','code'=>'200'])->withoutCookie($cookie);
    }


    static function NotifiqueUserApp(){
        $now = Carbon::now();
        $notify= Auth::user()->notifications->map(function($notify) use ($now){
            $created_at = Carbon::parse($notify->created_at);
            return [
                'NotifyInfo'=> $notify->data['NotifyInfo'],
                'TipeNotify'=> $notify->data['TipeNotify'],
                'leido'=> $notify->read_at,
                'id_notify'=> $notify->id,
                'time'=> $notify->created_at
            ];

        });
        event(new EventNotifyUsersApp($notify,$notify[0]['TipeNotify'],Auth::user()->id));
    }

    public function make_notify_read_AppMobile(Request $request){
       
        $notification =  Auth::user()->notifications->find($request->notificationId);
        $notification->markAsRead();
        $now = Carbon::now();
        $notify= Auth::user()->notifications->map(function($notify) use ($now){
            $created_at = Carbon::parse($notify->created_at);
            return [
                'NotifyInfo'=> $notify->data['NotifyInfo'],
                'TipeNotify'=> $notify->data['TipeNotify'],
                'leido'=> $notify->read_at,
                'id_notify'=> $notify->id,
                'time'=> $notify->created_at
            ];

        });
        event(new EventNotifyUsersApp($notify,$notify[0]['TipeNotify'],Auth::user()->id));
        
     }

     public function make_notify_read_all_AppMobile(){
       
        Auth::user()->unreadNotifications->markAsRead();
      $now = Carbon::now();
      $notify= Auth::user()->notifications->map(function($notify) use ($now){
        $created_at = Carbon::parse($notify->created_at);
        return [
            'NotifyInfo'=> $notify->data['NotifyInfo'],
            'TipeNotify'=> $notify->data['TipeNotify'],
            'leido'=> $notify->read_at,
            'id_notify'=> $notify->id,
            'time'=> $notify->created_at
        ];

      });
      event(new EventNotifyUsersApp($notify,$notify[0]['TipeNotify'],Auth::user()->id));
      
   }
}
