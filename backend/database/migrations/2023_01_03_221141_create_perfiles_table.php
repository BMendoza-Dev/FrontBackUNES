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
        Schema::create('perfiles', function (Blueprint $table) {
            $table->bigIncrements('id_perfil');
            //$table->id_perfiltimestamps();
            $table->boolean('active');
            $table->integer('curul');
            $table->string('firstName');
            $table->string('jurisdiction');
            $table->string('lastName');
            $table->string('politicalParty');
            $table->string('territorialDivision');
            $table->string('usedFirstName');
            $table->string('usedLastName');
            $table->binary('imagen');
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
