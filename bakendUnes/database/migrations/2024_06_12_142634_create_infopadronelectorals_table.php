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
        Schema::create('infopadronelectorals', function (Blueprint $table) {
            $table->id();
            $table->string('correo')->nullable();
            $table->string('tel')->nullable();
            $table->string('redfb')->nullable();          
            $table->string('redtw')->nullable();
            $table->string('redit')->nullable();
            $table->string('redttk')->nullable();
            $table->foreignId('padronelectoral_id')->references('id')->on('padronelectorals')->nullable();
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
        Schema::dropIfExists('infopadronelectorals');
    }
};
