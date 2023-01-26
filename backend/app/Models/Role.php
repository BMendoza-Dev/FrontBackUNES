<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'rol','estado'
      ];

    public function rcuenta(){
        return $this->hasMany('App\Models\Cuenta');
     }
}
