<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdHospedePedidos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pedidos', function (Blueprint $table) {
            $table->unsignedBigInteger('apartamento_id')->after('id');
            $table->foreign('apartamento_id')->references('id')->on('apartamentos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pedidos', function (Blueprint $table) {
            $table->dropForeign(['apartamento_id']);
            $table->dropColumn('apartamento_id');
        });
    }
}
