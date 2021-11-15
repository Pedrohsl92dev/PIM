<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdReservaFecharConta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fechar_contas', function (Blueprint $table) {
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
        Schema::table('fechar_contas', function (Blueprint $table) {
            $table->dropForeign(['hospede_id']);
            $table->dropColumn('hospede_id');
        });
    }
}
