<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEnderecoIdPedidoIdReservaIdHospede extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hospedes', function (Blueprint $table) {
            $table->unsignedBigInteger('endereco_id')->after('id');
            $table->foreign('endereco_id')->references('id')->on('enderecos');

            $table->unsignedBigInteger('pedido_id')->after('id');
            $table->foreign('pedido_id')->references('id')->on('pedidos');

            $table->unsignedBigInteger('reserva_id')->after('id');
            $table->foreign('reserva_id')->references('id')->on('reservas');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hospedes', function (Blueprint $table) {
            $table->dropForeign(['cidade_id']);
            $table->dropColumn('cidade_id');

            $table->dropForeign(['pedido_id']);
            $table->dropColumn('pedido_id');

            $table->dropForeign(['reserva_id']);
            $table->dropColumn('reserva_id');
        });
    }
}
