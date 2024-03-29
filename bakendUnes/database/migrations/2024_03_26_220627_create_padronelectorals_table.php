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
        Schema::create('padronelectorals', function (Blueprint $table) {
            $table->id();
            $table->string('nom_padron');
            $table->string('cedula');
            $table->string('nom_recinto');
            $table->integer('junta');
            $table->string('sexo');
            $table->string('adherente')->nullable();
            $table->foreignId('provincia_id')->references('id')->on('provincias')->nullable();
            $table->foreignId('cantone_id')->references('id')->on('cantones')->nullable();
            $table->foreignId('parroquia_id')->references('id')->on('parroquias')->nullable();
            $table->foreignId('zona_id')->references('cod_zona')->on('zonas')->nullable();
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
        Schema::dropIfExists('padronelectorals');
    }
};
