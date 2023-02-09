<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perfil;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Imagen extends Model
{
    public $timestamps = false;
    protected $fillable = ['id','imagen'];

    protected function imagen(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => base64_encode($value),
           
        );
    }

    public function Image(){
        return $this->belongsTo(Perfil::class);
     }

    

}
