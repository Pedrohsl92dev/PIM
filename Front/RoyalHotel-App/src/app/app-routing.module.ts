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
import { HospedeDetalheComponent } from './components/adm/hospede/hospede-detalhe/hospede-detalhe.component';
import { CadastrarProdutoComponent } from './components/adm/cadastrar-produto/cadastrar-produto.component';
import { ListaFornecedoresComponent } from './components/adm/cadastrar-fornecedor/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './components/adm/cadastrar-produto/lista-produtos/lista-produtos.component';
import { FornecedorComponent } from './components/adm/cadastrar-fornecedor/fornecedor.component';
import { RegistrarPedidoComponent } from './components/adm/registrar-pedido/registrar-pedido.component';
import { ListarPedidoComponent } from './components/adm/registrar-pedido/listar-pedido/listar-pedido.component';
import { InicioAdmComponent } from './components/adm/inicio-adm/inicio-adm.component';
import { HospedeListaComponent } from './components/adm/hospede/hospede-lista/hospede-lista.component';
import { CadastrarApartamentosComponent } from './components/adm/cadastrar-apartamentos/cadastrar-apartamentos.component';
import { ListarApartamentoComponent } from './components/adm/cadastrar-apartamentos/listar-apartamento/listar-apartamento.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { ListarReservasComponent } from './components/adm/hospede/nova-reserva/listar-reservas/listar-reservas.component';
import { MensagensFaleConoscoComponent } from './components/adm/mensagens-fale-conosco/mensagens-fale-conosco.component';
import { CadastroFuncionariosComponent } from './components/adm/cadastro-funcionarios/cadastro-funcionarios.component';
import { ListaFuncionarioComponent } from './components/adm/cadastro-funcionarios/lista-funcionario/lista-funcionario.component';
import { MensagensOrcamentoComponent } from './components/adm/mensagens-orcamento/mensagens-orcamento.component';
import { ListarReservasSiteComponent } from './components/adm/listar-reservas-site/listar-reservas-site.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'hospede/:id', component: PerfilComponent },
    ]
  },
  { path: 'listar-hospede', component: HospedeListaComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-hospede/:id', component: HospedeDetalheComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-hospede', component: HospedeDetalheComponent, canActivate: [AuthGuard] },

  { path: 'listar-pedido', component: ListarPedidoComponent, canActivate: [AuthGuard] },
  { path: 'registrar-pedido', component: RegistrarPedidoComponent, canActivate: [AuthGuard] },
  { path: 'registrar-pedido/:id', component: RegistrarPedidoComponent, canActivate: [AuthGuard] },

  { path: 'nova-reserva', component: NovaReservaComponent, canActivate: [AuthGuard] },
  { path: 'reservas', component: ListarReservasComponent, canActivate: [AuthGuard] },

  { path: 'adm', component: DashboardAdmComponent, canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: InicioAdmComponent }
    ]
  },
  { path: 'cadastrar-funcionario', component: CadastroFuncionariosComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-funcionario/:id', component: CadastroFuncionariosComponent, canActivate: [AuthGuard] },
  { path: 'listar-funcionario', component: ListaFuncionarioComponent, canActivate: [AuthGuard] },

  { path: 'cadastrar-produto', component: CadastrarProdutoComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-produto/:id', component: CadastrarProdutoComponent, canActivate: [AuthGuard] },
  { path: 'listar-produto', component: ListaProdutosComponent, canActivate: [AuthGuard] },

  { path: 'mensagens-fale-conosco', component: MensagensFaleConoscoComponent, canActivate: [AuthGuard] },
  { path: 'mensagens-orcamento', component: MensagensOrcamentoComponent, canActivate: [AuthGuard] },

  { path: 'cadastrar-fornecedor', component: FornecedorComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-fornecedor/:id', component: FornecedorComponent, canActivate: [AuthGuard] },
  { path: 'listar-fornecedor', component: ListaFornecedoresComponent, canActivate: [AuthGuard] },

  { path: 'cadastrar-apartamento', component: CadastrarApartamentosComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-apartamento/:id', component: CadastrarApartamentosComponent, canActivate: [AuthGuard] },
  { path: 'listar-apartamento', component: ListarApartamentoComponent, canActivate: [AuthGuard] },

  { path: 'reserva-site', component: ListarReservasSiteComponent },
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
