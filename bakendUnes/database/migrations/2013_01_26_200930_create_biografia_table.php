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
        Schema::create('biografias', function (Blueprint $table) {
            $table->id();
            $table->string('urlfb')->nullable();          
            $table->string('urltw')->nullable();
            $table->string('urlit')->nullable();
            $table->string('urlttk')->nullable();
            $table->longText('perfil')->nullable();
           
        });
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('biografia');
    }
};
