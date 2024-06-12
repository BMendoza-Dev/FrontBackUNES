<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Infopadronelectoral extends Model
{
    use HasFactory;
    protected $fillable = ['correo','tel','redfb','redtw','redit','redttk'];

    public function padronElectoral()
    {
        return $this->belongsTo(Padronelectoral::class, 'padronelectoral_id');
    }
    
}
