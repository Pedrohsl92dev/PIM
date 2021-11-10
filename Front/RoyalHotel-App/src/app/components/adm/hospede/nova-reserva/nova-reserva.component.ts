import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '@app/models/Reserva';
import { ApartamentoService } from '@app/services/apartamento.service';
import { NovaReservaService } from '@app/services/novaReserva.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.scss']
})
export class NovaReservaComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  dataSaida: string;
  dataEntrada: string;
  valorTotal: any;
  valorTotalSalvar: number;

  reserva = {} as Reserva;
  apartamento: any[] = [];
  hospedes: any[] = [];

  diaria: number;

  modalRef: BsModalRef;

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
    private router: Router,
    private service: NovaReservaService,
    private serviceApartamento: ApartamentoService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
    this.listarHospedes();
  }

  public validation(): void {
    this.form = this.fb.group({
      hospede: ['', Validators.required],
      categoria: ['', Validators.required],
      apartamento: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      valorDiaria: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(100)]],
      statusPagamento: ['', Validators.required],
      dataPagamento:  ['', Validators.required],
      formaPagamento:  ['', Validators.required],
      valor:  ['', Validators.required],
    });
  }

  salvarReserva(): void {
    if (!this.form.valid) {
      this.reserva.hospede_id = this.form.value.hospede;
      this.reserva.apartamento_id = this.form.value.apartamento;
      this.reserva.dataEntrada = this.form.value.dataEntrada.toISOString().split('T')[0];
      this.reserva.dataSaida = this.form.value.dataSaida.toISOString().split('T')[0];
      this.reserva.valorDiaria = this.diaria;
      this.reserva.qtdPessoas = this.form.value.qtdPessoas;
      this.reserva.statusPagamento = this.form.value.statusPagamento;
      this.reserva.valorTotal = this.valorTotalSalvar;
      this.service.postReserva(this.reserva).subscribe(
        () => {
          this.toastr.success('Reserva efetuada com Sucesso!', ' Sucesso');
          this.form.reset();
          // this.router.navigate([`/adm`]);
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

  listar(): void {
    this.router.navigate([`/listar-hospede`]);
  }

  public resetForm(): void {
    this.router.navigate([`/adm`]);
    this.form.reset();
  }

  public listarHospedes(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.hospedes = resp;
        this.listarApartamentos();
      }
    });
  }

  public listarApartamentos(): void {
    this.serviceApartamento.getApartamento().subscribe({
      next: (resp) => {
        this.apartamento = resp;
      }
    });
  }

  public calculoValorTotal(): void {
    if (this.dataEntrada !== undefined && this.dataSaida !== undefined) {
      const dataChegada = this.form.value.dataEntrada;
      const dataSaida = this.form.value.dataSaida;
      const diferenca = Math.abs(dataChegada.getTime() - dataSaida.getTime());
      const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
      this.valorTotal = dias * this.diaria + ',00 Reais';
      this.valorTotalSalvar =  dias * this.diaria;
    }
  }

  public modalPagamento(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  valorDiaria(): void {
    switch (this.form.value.apartamento) {
      case 'Duplo Deluxe':
        this.diaria = 250.00;
        break;
      case 'Individual Deluxe':
        this.diaria = 250.00;
        break;
      case 'Suíte de Lua de Mel':
        this.diaria = 750.00;
        break;
      case 'Econômico Duplo':
        this.diaria = 200.00;
        break;
      case 'Suite Master':
        this.diaria = 250.00;
        break;
      case 'Suíte Núpsia':
        this.diaria = 250.00;
        break;
      case 'Suíte Super Luxo':
        this.diaria = 250.00;
        break;
      case 'Suíte P.N.E':
        this.diaria = 250.00;
        break;
      default:
        this.diaria = 250.00;
        break;
    }
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
