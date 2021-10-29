<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddApartamentoIdContaIdReserva extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->unsignedBigInteger('apartamento_id')->after('id');
            $table->foreign('apartamento_id')->references('id')->on('apartamentos');

            $table->unsignedBigInteger('conta_id')->after('id');
            $table->foreign('conta_id')->references('id')->on('contas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->dropForeign(['apartamento_id']);
            $table->dropColumn('apartamento_id');

            $table->dropForeign(['conta_id']);
            $table->dropColumn('conta_id');
        });
    }
}
