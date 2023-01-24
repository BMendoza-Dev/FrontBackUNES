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
            $table->bigIncrements('id_cuenta');
            $table->unsignedBigInteger('id_rol');
            $table->unsignedBigInteger('id_perfil');
            $table->string('nombres');
            $table->string('correo');
            $table->string('password');
            $table->string('imagen');
            $table->boolean('estado');
            $table->foreign('id_rol')->references('id_rol')->on('roles');
            $table->foreign('id_perfil')->references('id_perfil')->on('perfiles');
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
