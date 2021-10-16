import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcomodacoesComponent } from './components/Acomodacoes/acomodacoes.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ServicosComponent } from './components/hotel/servicos/servicos.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { OrcamentoComponent } from './components/hotel/orcamento/orcamento.component';
import { FaqComponent } from './components/hotel/faq/faq.component';
import { FaleConoscoComponent } from './components/hotel/fale-conosco/fale-conosco.component';
import { ReserveAgoraComponent } from './components/reserve-agora/reserve-agora.component';
import { DashboardAdmComponent } from './components/adm/dashboardAdm/dashboardAdm.component';
import { NovaReservaComponent } from './components/adm/hospede/nova-reserva/nova-reserva.component';
import { HospedeComponent } from './components/adm/hospede/hospede.component';
import { HospedeDetalheComponent } from './components/adm/hospede/hospede-detalhe/hospede-detalhe.component';
import { CadastrarProdutoComponent } from './components/adm/cadastrar-produto/cadastrar-produto.component';
import { ListaFornecedoresComponent } from './components/adm/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './components/adm/lista-produtos/lista-produtos.component';
import { FornecedorComponent } from './components/adm/cadastrar-fornecedor/fornecedor.component';
import { RegistrarPedidoComponent } from './components/adm/registrar-pedido/registrar-pedido.component';
import { ListarPedidoComponent } from './components/adm/listar-pedido/listar-pedido.component';
import { InicioAdmComponent } from './components/adm/inicio-adm/inicio-adm.component';
import { HospedeListaComponent } from './components/adm/hospede/hospede-lista/hospede-lista.component';
import { CadastrarApartamentosComponent } from './components/adm/cadastrar-apartamentos/cadastrar-apartamentos.component';
import { ListarApartamentoComponent } from './components/adm/listar-apartamento/listar-apartamento.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { ListarReservasComponent } from './components/adm/listar-reservas/listar-reservas.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'hospede', component: PerfilComponent },
    ]
  },
  { path: 'listar-hospede', component: HospedeListaComponent },
  { path: 'cadastro-hospede', component: HospedeDetalheComponent },
  { path: 'listar-pedido', component: ListarPedidoComponent },
  { path: 'registrar-pedido', component: RegistrarPedidoComponent },
  { path: 'nova-reserva', component: NovaReservaComponent },
  { path: 'reservas', component: ListarReservasComponent },
  { path: 'adm', component: DashboardAdmComponent,
    children: [
      { path: 'inicio', component: InicioAdmComponent }
    ]
  },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  { path: 'listar-produto', component: ListaProdutosComponent },
  { path: 'cadastrar-fornecedor', component: FornecedorComponent },
  { path: 'listar-fornecedor', component: ListaFornecedoresComponent },
  { path: 'cadastrar-apartamento', component: CadastrarApartamentosComponent },
  { path: 'listar-apartamento', component: ListarApartamentoComponent },
  {
    path: 'hotel', component: HotelComponent,
    children: [
      { path: 'servico', component: ServicosComponent },
      { path: 'orcamento', component: OrcamentoComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'fale-conosco', component: FaleConoscoComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'acomodacoes', component: AcomodacoesComponent },
  { path: 'reserve-agora', component: ReserveAgoraComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
