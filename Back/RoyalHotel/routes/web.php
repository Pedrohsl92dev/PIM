<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservaSiteController;
use App\Http\Controllers\CadastroHospedeController;
use App\Http\Controllers\OrcamentoController;
use App\Http\Controllers\FaleConoscoController;
use App\Http\Controllers\CadastroApartamentoController;
use App\Http\Controllers\CadastrarProdutosController;
use App\Http\Controllers\CadastrarFornecedorController;


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

Route::resource('reserve-agora', ReservaSiteController::class);
Route::resource('hospede', HospedeController::class);
Route::resource('orcamento', OrcamentoController::class);
Route::resource('fale-conosco', FaleConoscoController::class);
Route::resource('apartamento', ApartamentoController::class);
Route::resource('produto', ProdutoController::class);
Route::resource('fornecedor', FornecedorController::class);
