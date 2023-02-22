<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Imagen;
use App\Models\Biografia;
class Perfil extends Model
{
    protected $fillable = [
        'active','curul','firstName','jurisdiction','lastName','politicalParty','territorialDivision','usedFirstName',
        'usedLastName'
      ];
    
    public $timestamps = false;
    public function Cuentas(){
        return $this->hasMany('App\Models\Cuenta');
     }

     public function biografia(){
      return $this->belongsTo(Biografia::class);
   }
     public function image(){
    	return $this->morphMany('App\Models\Imagen','imageable');
    }
}
