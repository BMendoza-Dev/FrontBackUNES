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
        Schema::create('perfils', function (Blueprint $table) {
            $table->id();
       
              $table->boolean('active');
              $table->integer('curul');
              $table->string('firstName');
              $table->string('email');
              $table->string('jurisdiction');
              $table->string('lastName');
              $table->string('politicalParty');
              $table->string('territorialDivision');
              $table->string('usedFirstName');
              $table->string('usedLastName');
              $table->foreignId('biografia_id')->nullable()->references('id')->on('biografias');
              $table->foreignId('localizacion_id')->nullable()->references('id')->on('localizacions');
           
             // $table->foreignId('imagen_id')->references('id')->on('imagens');
          });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('perfiles');
    }
};
