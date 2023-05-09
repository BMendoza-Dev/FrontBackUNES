<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class MobileUser extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'mobile_users';
    protected $guarded = ['id'];

    protected $hidden = [
        'password',
    ];
}
