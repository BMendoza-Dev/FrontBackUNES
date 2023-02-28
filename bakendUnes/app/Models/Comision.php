<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perfil;
class Comision extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
      ];
    public $timestamps = false;
    public function perfil(){
        return $this->hasMany(Perfil::class);
     }


}
