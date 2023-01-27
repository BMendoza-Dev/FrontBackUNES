<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return response()->json(['menssage'=>'401']);
        }
    }

    public function handle($request, Closure $next, ...$guards)
    {
        if($toke = $request->cookie('cookie_token')){
            $request->headers->set('Authorization', 'Bearer '.$toke);
        }
        $this->authenticate($request, $guards);
        return $next($request);
    }
}
