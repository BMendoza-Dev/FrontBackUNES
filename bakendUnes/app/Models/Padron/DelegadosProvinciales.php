<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DelegadosProvinciales extends Model
{
    use HasFactory;
    protected $fillable = ['provincia','nombres','cedula'];
}
