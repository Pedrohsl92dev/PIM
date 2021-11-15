import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '@app/models/Pedido';
import { HospedeService } from '@app/services/hospede.service';
import { PedidoService } from '@app/services/pedido.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss']
})
export class RegistrarPedidoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-clipboard-list';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;
  produtos: any[] = [];

  pedido = {} as Pedido;
  hospedes: any[] = [];
  apartamentos: any[] = [];

  estadoSalvar = 'post';
  pedidoId: number;

  modalRef: BsModalRef;
  valorTotal: any;
  valorTotalRequisicao: any;

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

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService,
    private activatedRouter: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private serviceHospede: HospedeService,
    private servicePedido: PedidoService,
    private router: Router,
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
    this.listarHospedes();
    this.buscarProdutos();
    this.buscarApartamento();
    this.carregarPedido();
  }

  public validation(): void {
    this.form = this.fb.group({
      nomeProduto: ['', Validators.required],
      valor: ['', Validators.required],
      qtdProduto: ['', Validators.required],
      apartamento: ['', Validators.required],
    });
  }

  listarHospedes(): void {
    this.serviceHospede.get().subscribe({
      next: (resp) => {
        this.hospedes = resp;
      }
    });
  }

  public buscarApartamento(): void {
    this.servicePedido.getApartamento().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
      }
    });
  }

  obterValorTotal(): void {
    const qtdProduto = this.form.value.qtdProduto;
    const valor = this.form.value.valor;
    this.valorTotalRequisicao =  (qtdProduto * valor);
    this.valorTotal = (qtdProduto * valor);
  }

  public validarPedido(): void {
    if (this.form.valid) {
      this.pedido.nomeProduto = this.form.value.nomeProduto;
      this.pedido.valor = this.form.value.valor;
      this.pedido.qtdProduto = this.form.value.qtdProduto;
      this.pedido.valorTotal = this.valorTotalRequisicao.toString();
      this.pedido.apartamento_id = this.form.value.apartamento;
      this.registrarPedido();
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public registrarPedido(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-unused-expression
      this.pedido = this.estadoSalvar === 'post' ? { ...this.pedido } : { id: this.pedido.id, ...this.pedido };
      this.servicePedido[this.estadoSalvar](this.pedido).subscribe(
        () => {
          this.toastr.success('Pedido cadastrado com Sucesso!', ' Sucesso');
          this.form.reset();
          this.valorTotal = '';

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

  public carregarPedido(): void {
    this.pedidoId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.pedidoId !== null && this.pedidoId !== 0) {
      this.estadoSalvar = 'put';
      this.servicePedido.getById(this.pedidoId).subscribe(
        (pedido: Pedido) => {
          this.pedido = {...pedido};
          this.form.patchValue(this.pedido);
        }
      );
    }
  }

  public buscarProdutos(): void {
    this.servicePedido.getProdutos().subscribe(
      (resp) => {
        this.produtos = resp;
      }
    );
  }

  navegar(): void {
    this.router.navigate([`/listar-pedido`]);
  }

  public resetForm(): void {
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }
}
