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
        Schema::create('parroquias', function (Blueprint $table) {
            $table->id();
            $table->string('parroquia');
            $table->string('est');
            $table->foreignId('distrito_id')->references('id')->on('distritos')->nullable();
            $table->foreignId('cantone_id')->references('id')->on('cantones')->nullable();
            $table->foreignId('circunscripcione_id')->references('id')->on('circunscripciones')->nullable();
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
        Schema::dropIfExists('parroquias');
    }
};
