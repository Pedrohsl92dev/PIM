<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadastroHospedesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadastro_hospedes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('primeiroNome');
            $table->string('sobrenome');
            $table->string('email');
            $table->string('usuario');
            $table->string('senha');
            $table->integer('categoria');
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
        Schema::dropIfExists('cadastro_hospedes');
    }
}
