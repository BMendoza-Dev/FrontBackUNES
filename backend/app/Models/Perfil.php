<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Imagenes;
class Perfil extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'active','curul','firstName','jurisdiction','lastName','politicalParty','territorialDivision','usedFirstName',
        'usedLastName'
      ];
    
    public $timestamps = false;
    public function Cuentas(){
        return $this->hasMany('App\Models\Cuenta');
     }

     public function Imagen(){
        return $this->belongsTo(Imagenes::class);
     }


}
