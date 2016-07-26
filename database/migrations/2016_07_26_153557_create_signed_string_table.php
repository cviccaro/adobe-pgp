<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSignedStringTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('signed_string', function (Blueprint $table) {
            $table->increments('id');
            $table->string('text');
            $table->text('armored')->nullable();
            $table->text('base64')->nullable();
            $table->integer('list_id')->unsigned()->index();
            $table->foreign('list_id')->references('id')->on('list')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('signed_string');
    }
}
