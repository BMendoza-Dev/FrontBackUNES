<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Role;
use App\Models\Perfil;
class Cuenta extends Model
{
    //use HasFactory;
   
    public $timestamps = false;
    public function rol(){
    	return $this->belongsTo(Role::class);
    }

    public function Perfil(){
    	return $this->belongsTo(Perfil::class);
    }
}
