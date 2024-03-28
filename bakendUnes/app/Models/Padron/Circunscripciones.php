<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Circunscripciones extends Model
{
    use HasFactory;
    protected $fillable = ['circunscripcion','cantone_id','id'];
}
