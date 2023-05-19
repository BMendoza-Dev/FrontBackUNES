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
        Schema::create('blog_visitante', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('visitante_id')->references('id')->on('visitantes');
            $table->foreignId('blog_id')->references('id')->on('blogs');
            $table->integer('visitas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visitante_blog');
    }
};
