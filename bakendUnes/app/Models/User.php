<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Perfil;
use App\Models\Blog;
use App\Models\Roles;
use App\Models\Nota;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'estado',
        'perfil_id',
    ];
    public $timestamps = false;
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function Perfil(){
    	return $this->belongsTo(Perfil::class);
    }

    public function AauthAcessToken(){
        return $this->hasMany('\App\OauthAccessToken');
    }
    public function blogs(){
        return $this->HasMany(Blog::class)->withTimesTamps();
    }

    public function roles(){
        return $this->belongsToMany(Roles::class)->withTimesTamps();
    }

    public function nota(){
    	return $this->hasMany(Nota::class);
    }

    public function havepermisos($permisos){
        foreach ($this->roles as $rol) {
           if($rol['fullacceso']=='yes'){
            return true;
           }
           foreach ($rol->permisos as $perm) {
           if($perm->slug==$permisos){
            return true;
           }
        }

        }
       return false;
    }

}
