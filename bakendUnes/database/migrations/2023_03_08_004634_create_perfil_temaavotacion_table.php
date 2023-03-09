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
        Schema::create('perfil_temaavotacion', function (Blueprint $table) {
            $table->id();
            $table->enum('voto',['SI','NO','ABSTENCION','AUSENTE','BLANCO']);
            $table->foreignId('perfil_id')->references('id')->on('perfils');
            $table->foreignId('temaavotacion_id')->references('id')->on('temaavotacions');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('perfil_temaavotacion');
    }
};
