<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adherentes extends Model
{
    use HasFactory;
    protected $fillable = ['cedula','id','nombres','tipo'];
}
