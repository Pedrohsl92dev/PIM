<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadastroFornecedorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadastro_fornecedors', function (Blueprint $table) {
            $table->id();
            $table->string('razaoSocial');
            $table->string('cnpj');
            $table->string('ie');
            $table->string('cidade');
            $table->string('estado');
            $table->string('cep');
            $table->string('endereco');
            $table->string('complemento');
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
        Schema::dropIfExists('cadastro_fornecedors');
    }
}
