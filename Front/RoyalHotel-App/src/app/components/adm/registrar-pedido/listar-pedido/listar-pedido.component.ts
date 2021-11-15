import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from '@app/models/Conta';
import { Pedido } from '@app/models/Pedido';
import { ApartamentoService } from '@app/services/apartamento.service';
import { NovaReservaService } from '@app/services/novaReserva.service';
import { PedidoService } from '@app/services/pedido.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-clipboard-list';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;

  pedidos: any[] = [];
  apartamentos: any[] = [];
  dadosHospedes: any[] = [];
  reservas: any[] = [];

  conta = {} as Conta;

  form: FormGroup;

  registrarPedido: any;
  apartamentoId: any;
  idPedido: any;

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false,
    };
  }

  get f(): any {
    return this.form.controls;
  }

  codigoHospede: number;
  codigoApartamento: number;

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private router: Router,
    private service: PedidoService,
  ) { }

  ngOnInit(): void {
    this.buscarPedido();
    this.validacao();
  }

  public validacao(): void {
    this.form = this.fb.group({
      nomeProduto: ['', Validators.required],
      qtdProduto:  ['', Validators.required],
      dataCompra:  ['', Validators.required],
      numeroApartamento:  ['', Validators.required],
      valorTotal:  ['', Validators.required],
    });
  }

  public buscarPedido(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.pedidos = resp;
        this.buscarReservas();
      }
    });
  }

  public registrarConta(): void {
    if (this.form.valid) {
      this.conta.produto = this.form.value.nomeProduto;
      this.conta.qtdProduto = Number(this.form.value.qtdProduto);
      this.conta.dataCompra = this.form.value.dataCompra.toISOString().split('T')[0];
      this.conta.apartamento_id = this.apartamentoId;
      this.conta.valor = this.form.value.valorTotal;
      this.service.postConta(this.conta).subscribe(
        () => {
          this.toastr.success('Registro efetuado!', ' Sucesso');
          this.form.reset();
          this.excluir(this.idPedido);
          this.modalRef.hide();
        },
        (error: any) => {
          this.toastr.error('Erro ao efetuar cadastro.', 'Erro!');
          console.log(error);
        }
      );
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public buscarReservas(): void {
    this.service.getReservas().subscribe({
     next: (resp) => {
       this.reservas = resp;
       this.buscarHospede();
       this.buscarApartamento();
       this.trataDadosApartamento();
     }
   });
 }

 public modalRegistrarPedido(template2: TemplateRef<any>, pedido: Pedido): void {
  this.apartamentoId = pedido.apartamento_id;
  this.registrarPedido = {...pedido};
  this.idPedido = pedido.id;
  this.form.patchValue(this.registrarPedido);
  this.modalRef = this.modalService.show(
    template2,
    Object.assign({}, { class: 'gray modal-lg' })
  );
}

 public cssValidator(campoForm: FormControl | AbstractControl): any {
  return { 'is-invalid': campoForm.errors && campoForm.touched };
}

  public buscarHospede(): void {
    this.service.getHospede().subscribe({
      next: (resp) => {
        this.dadosHospedes = resp;
      }
    });
  }

  public buscarApartamento(): void {
    this.service.getApartamento().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
        this.trataDadosApartamento();
      }
    });
  }

  public trataDadosApartamento(): void {
    this.pedidos.forEach((el: any) => {
      for (const i of this.apartamentos) {
        if (el.apartamento_id === i.id) {
          el.numeroApartamento = i.numero;
          this.pegarIdHospede();
        }
      }
    });
  }

  public pegarIdHospede(): void {
    this.pedidos.forEach((el: any) => {
      for (const i of this.reservas) {
        if (el.apartamento_id === i.apartamento_id) {
          el.idHospede = i.hospede_id;
          this.pegarNomeHospede();
        }
      }
    });
  }

  public pegarNomeHospede(): void {
    this.pedidos.forEach((el: any) => {
      for (const i of this.dadosHospedes) {
        if (el.idHospede === i.id) {
          el.nomeHospede = i.nome;
        }
      }
    });
  }

  public excluir(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.buscarPedido();
      }
    });
  }

  public editar(id: number): void {
    this.router.navigate([`/registrar-pedido`, id]);
  }


  navegar(): void {
    this.router.navigate([`/adm`]);
  }

  decline(): void {
    this.modalRef.hide();
  }

}
