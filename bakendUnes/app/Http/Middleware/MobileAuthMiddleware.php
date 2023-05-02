<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class MobileAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    {
        public function handle(Request $request, Closure $next)
        {
            // Verificamos si el usuario está autenticado
            if (!Auth::guard('api')->check()) {
                // Si no está autenticado, devolvemos un error
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            // Si está autenticado, continuamos con la petición
            return $next($request);
        }
    }
}
