<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

use Laravel\Sanctum\HasApiTokens;


use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
class MobileUser extends Model implements AuthenticatableContract
{
    use HasApiTokens;
    use Authenticatable;
    use HasFactory;

    protected $table = 'mobile_users';
    protected $guarded = ['id'];

    protected $hidden = [
        'password',
    ];
}
