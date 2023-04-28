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
        Schema::create('blog_editorial', function (Blueprint $table) {
            $table->id();
            $table->timestamps(6);
            $table->foreignId('editorial_id')->references('id')->on('editorials');
            $table->foreignId('blog_id')->references('id')->on('blogs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('editorial_blog');
    }
};
