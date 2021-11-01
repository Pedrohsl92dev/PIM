<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservaSiteController;
use App\Http\Controllers\HospedeController;
use App\Http\Controllers\OrcamentoController;
use App\Http\Controllers\FaleConoscoController;
use App\Http\Controllers\ApartamentoController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\ContaController;
use App\Http\Controllers\FuncionarioController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CadastroApartamentoController;
use App\Http\Controllers\CadastroFornecedorController;
use App\Http\Controllers\CadastroHospedeController;

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

Route::resource('reserve-agora', ReservaSiteController::class);
Route::resource('hospede', HospedeController::class);
Route::resource('orcamento', OrcamentoController::class);
Route::resource('fale-conosco', FaleConoscoController::class);
Route::resource('apartamento', ApartamentoController::class);
Route::resource('produto', ProdutoController::class);
Route::resource('conta', ContaController::class);
Route::resource('pedido', PedidoController::class);
Route::resource('reserva', ReservaController::class);

Route::resource('cadastro-usuario', UsuarioController::class);
Route::resource('cadastro-funcionario', FuncionarioController::class);
Route::resource('cadastro-hospede', CadastroHospedeController::class);
Route::resource('cadastro-apartamento', CadastroApartamentoController::class);
Route::resource('cadastro-fornecedor', CadastroFornecedorController::class);
// Route::resource('cadastro-produto', ProdutoController::class);
