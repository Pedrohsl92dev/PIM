<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservaSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reserva_sites', function (Blueprint $table) {
            $table->increments('id');
            $table->string('primeiroNome');
            $table->string('sobrenome');
            $table->string('email');
            $table->string('telefone');
            $table->string('celular');
            $table->date('dataEntrada');
            $table->date('dataSaida');
            $table->integer('qtdAdultos');
            $table->integer('qtdCriancas');
            $table->integer('qtdApartamentos');
            $table->string('cpf');
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
        Schema::dropIfExists('reserva_sites');
    }
}

