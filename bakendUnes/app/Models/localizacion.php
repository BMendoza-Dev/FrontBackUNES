<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class localizacion extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'city','edifice','floor','office','phone'
      ];
    public function Perfil(){
    	return $this->hasOne(Perfil::class);
    }
}
