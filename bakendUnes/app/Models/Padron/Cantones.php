<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cantones extends Model
{
    use HasFactory;
    protected $fillable = ['canton','id','provincia_id','distrito_id'];
}
