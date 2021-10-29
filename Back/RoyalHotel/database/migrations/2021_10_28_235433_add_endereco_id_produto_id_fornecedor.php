<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEnderecoIdProdutoIdFornecedor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fornecedors', function (Blueprint $table) {
            $table->unsignedBigInteger('endereco_id')->after('id');
            $table->foreign('endereco_id')->references('id')->on('enderecos');

            $table->unsignedBigInteger('produto_id')->after('id');
            $table->foreign('produto_id')->references('id')->on('produtos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fornecedors', function (Blueprint $table) {
            $table->dropForeign(['endereco_id']);
            $table->dropColumn('endereco_id');

            $table->dropForeign(['produto_id']);
            $table->dropColumn('produto_id');
        });
    }
}
