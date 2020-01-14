<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('author_id');
            $table->string('name' , 255);
            $table->string('authors')->default(null);
            $table->string('organisation');
            $table->string('position');
            $table->string('another_info')->default(null);
            $table->unsignedBigInteger('status')->default(1);
            $table->timestamps();
            $table->foreign('author_id')->references('id')->on('users');
            $table->foreign('status')->references('id')->on('article_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
