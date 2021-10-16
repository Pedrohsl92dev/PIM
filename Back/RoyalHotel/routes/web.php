<?php

use Illuminate\Support\Facades\Route;
// use App\http\Controllers\ReservaSiteController;
// use App\http\Controllers\CadastroHospedeController;
// use App\http\Controllers\OrcamentoController;
// use App\http\Controllers\FaleConoscoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('angular');
// });

Route::resource('reservar-agora', ReservaSiteController::class);
Route::resource('cadastro-usuario', CadastroHospedeController::class);
Route::resource('orcamento', OrcamentoController::class);
Route::resource('fale-conosco', FaleConoscoController::class);
