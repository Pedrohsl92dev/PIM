<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHospedeIdApartamentoIdReserva extends Migration
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

            $table->unsignedBigInteger('hospede_id')->after('id');
            $table->foreign('hospede_id')->references('id')->on('hospedes');
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

            $table->dropForeign(['hospede_id']);
            $table->dropColumn('hospede_id');
        });
    }
}
