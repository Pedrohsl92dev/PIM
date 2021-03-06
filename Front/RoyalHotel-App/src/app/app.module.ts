import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { NgxCurrencyModule } from 'ngx-currency';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcomodacoesComponent } from './components/Acomodacoes/acomodacoes.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';

import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ServicosComponent } from './components/hotel/servicos/servicos.component';
import { OrcamentoComponent } from './components/hotel/orcamento/orcamento.component';
import { FaqComponent } from './components/hotel/faq/faq.component';
import { FaleConoscoComponent } from './components/hotel/fale-conosco/fale-conosco.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReserveAgoraComponent } from './components/reserve-agora/reserve-agora.component';
import { SidebarComponent } from './components/adm/sidebar/sidebar.component';
import { HospedeComponent } from './components/adm/hospede/hospede.component';
import { DashboardAdmComponent } from './components/adm/dashboardAdm/dashboardAdm.component';
import { HospedeDetalheComponent } from './components/adm/hospede/hospede-detalhe/hospede-detalhe.component';
import { HospedeListaComponent } from './components/adm/hospede/hospede-lista/hospede-lista.component';
import { NovaReservaComponent } from './components/adm/hospede/nova-reserva/nova-reserva.component';
import { CadastrarProdutoComponent } from './components/adm/cadastrar-produto/cadastrar-produto.component';
import { ListaFornecedoresComponent } from './components/adm/cadastrar-fornecedor/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './components/adm/cadastrar-produto/lista-produtos/lista-produtos.component';
import { FornecedorComponent } from './components/adm/cadastrar-fornecedor/fornecedor.component';
import { RegistrarPedidoComponent } from './components/adm/registrar-pedido/registrar-pedido.component';
import { ListarPedidoComponent } from './components/adm/registrar-pedido/listar-pedido/listar-pedido.component';
import { InicioAdmComponent } from './components/adm/inicio-adm/inicio-adm.component';
import { CadastrarApartamentosComponent } from './components/adm/cadastrar-apartamentos/cadastrar-apartamentos.component';
import { ListarApartamentoComponent } from './components/adm/cadastrar-apartamentos/listar-apartamento/listar-apartamento.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { ListarReservasComponent } from './components/adm/hospede/nova-reserva/listar-reservas/listar-reservas.component';
import { FecharContaComponent } from './components/adm/fechar-conta/fechar-conta.component';
import { MensagensFaleConoscoComponent } from './components/adm/mensagens-fale-conosco/mensagens-fale-conosco.component';
import { CadastroFuncionariosComponent } from './components/adm/cadastro-funcionarios/cadastro-funcionarios.component';
import { ListaFuncionarioComponent } from './components/adm/cadastro-funcionarios/lista-funcionario/lista-funcionario.component';
import { HospedeService } from './services/hospede.service';
import { ApartamentoService } from './services/apartamento.service';
import { FornecedorService } from './services/fornecedor.service';
import { ProdutoService } from './services/produto.service';
import { NovaReservaService } from './services/novaReserva.service';
import { MensagensOrcamentoComponent } from './components/adm/mensagens-orcamento/mensagens-orcamento.component';
import { ListarReservasSiteComponent } from './components/adm/listar-reservas-site/listar-reservas-site.component';
import { FuncionarioService } from './services/funcionario.service';
import { PedidoService } from './services/pedido.service';
import { InicioService } from './services/inicio.service';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    AcomodacoesComponent,
    DashboardComponent,
    NavComponent,
    TituloComponent,
    DateTimeFormatPipe,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HotelComponent,
    ServicosComponent,
    OrcamentoComponent,
    FaqComponent,
    FaleConoscoComponent,
    FooterComponent,
    ReserveAgoraComponent,
    SidebarComponent,
    HospedeComponent,
    DashboardAdmComponent,
    HospedeComponent,
    HospedeDetalheComponent,
    HospedeListaComponent,
    NovaReservaComponent,
    CadastrarProdutoComponent,
    ListaFornecedoresComponent,
    ListaProdutosComponent,
    FornecedorComponent,
    RegistrarPedidoComponent,
    ListarPedidoComponent,
    InicioAdmComponent,
    CadastrarApartamentosComponent,
    ListarApartamentoComponent,
    PerfilComponent,
    ListarReservasComponent,
    FecharContaComponent,
    MensagensFaleConoscoComponent,
    CadastroFuncionariosComponent,
    ListaFuncionarioComponent,
    MensagensOrcamentoComponent,
    ListarReservasSiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule,
    NgxCurrencyModule
  ],
  providers: [
    HospedeService,
    ApartamentoService,
    FornecedorService,
    ProdutoService,
    NovaReservaService,
    FuncionarioService,
    PedidoService,
    InicioService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
