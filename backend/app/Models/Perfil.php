<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;
    
    protected $table = 'perfiles';
    protected $primaryKey = 'id_perfil';
    public $timestamps = false;
    public function rcuenta(){
        return $this->hasMany('App\Models\Cuenta','id_cuenta');
     }


}
