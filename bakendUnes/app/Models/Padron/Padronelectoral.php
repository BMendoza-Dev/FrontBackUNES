<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Padronelectoral extends Model
{
    use HasFactory;
    protected $fillable = ['nom_padron','cedula','nom_recinto','id','junta','sexo','adherente','provincia_id','cantone_id','parroquia_id','zona_id'];
    public function infoPadronElectoral()
    {
        return $this->hasOne(Infopadronelectoral::class, 'padronelectoral_id');
    }
}
