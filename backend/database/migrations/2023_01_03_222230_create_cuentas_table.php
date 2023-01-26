<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuentas', function (Blueprint $table) {
            $table->id();
       //     $table->unsignedBigInteger('id_rol');
     //       $table->unsignedBigInteger('id_perfil');
            $table->string('nombres');
            $table->string('correo');
            $table->string('password');
            $table->string('imagen');
            $table->boolean('estado');          
            $table->foreignId('ron_id')->references('id')->on('roles');
            $table->foreignId('perfil_id')->references('id')->on('perfils');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
        Schema::dropIfExists('cuentas');
    }
};
