<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distritos extends Model
{
    use HasFactory;
    protected $fillable = ['distritos','id','provincia_id'];
}
