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
        Schema::create('comision_perfil', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comision_id')->references('id')->on('comisions');
            $table->foreignId('perfil_id')->references('id')->on('perfils');
            $table->string('roleName');
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
        Schema::dropIfExists('perfil_comisiones');
    }
};
