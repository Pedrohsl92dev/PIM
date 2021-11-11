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
Route::get('hospede/{id}', [HospedeController::class, 'destroy'])->name('hospede_delete');
Route::get('hospede/{id}', [HospedeController::class, 'show'])->name('hospede_show');
Route::put('hospede/edit/{id}', [HospedeController::class, 'update'])->name('hospede_update');

Route::resource('orcamento', OrcamentoController::class);
Route::resource('fale-conosco', FaleConoscoController::class);

Route::resource('apartamento', ApartamentoController::class);
Route::get('apartamento/{id}', [ApartamentoController::class, 'destroy'])->name('apartamento_delete');
Route::put('apartamento/edit/{id}', [ApartamentoController::class, 'update'])->name('apartamento_update');


Route::resource('produto', ProdutoController::class);
Route::get('produto/{id}', [ProdutoController::class, 'destroy'])->name('produto_delete');
Route::put('produto/edit/{id}', [ProdutoController::class, 'update'])->name('produto_update');

Route::resource('reserva', ReservaController::class);

Route::resource('fornecedor', FornecedorController::class);
Route::resource('conta', ContaController::class);
Route::resource('pedido', PedidoController::class);
Route::resource('cadastro-usuario', UsuarioController::class);
Route::resource('cadastro-funcionario', FuncionarioController::class);
