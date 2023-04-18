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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->longText('blogtitulo');
            $table->string('blogdescripcion');
            $table->longText('blogcontenido');
            $table->boolean('masleido');
            $table->boolean('ultimanoticia');
            $table->boolean('aprobado');
            $table->foreignId('editoriale_id')->nullable()->references('id')->on('editoriales');
            $table->foreignId('categorie_id')->references('id')->on('categories');
            $table->foreignId('perfil_id')->references('id')->on('perfils');
            $table->foreignId('users_id')->references('id')->on('users');
            $table->softDeletes();
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
        Schema::dropIfExists('blogs');
    }
};
