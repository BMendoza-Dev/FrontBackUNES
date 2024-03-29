<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zonas extends Model
{
    use HasFactory;
    protected $fillable = ['zona','cod_zona','circunscripcione_id','parroquia_id','id'];
}
