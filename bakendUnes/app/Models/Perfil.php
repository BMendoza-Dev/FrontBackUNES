<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Imagen;
use App\Models\Biografia;
use App\Models\Localizacion;
class Perfil extends Model
{
    protected $fillable = [
        'active','curul','firstName','jurisdiction','lastName','politicalParty','territorialDivision','usedFirstName',
        'usedLastName','localizacion_id'
      ];
    
    public $timestamps = false;
    public function Cuentas(){
        return $this->hasMany('App\Models\Cuenta');
     }

     public function biografia(){
      return $this->belongsTo(Biografia::class);
    }

   public function localizacion(){
    return $this->belongsTo(Localizacion::class);
   }

     public function image(){
    	return $this->morphMany('App\Models\Imagen','imageable');
    }
}
