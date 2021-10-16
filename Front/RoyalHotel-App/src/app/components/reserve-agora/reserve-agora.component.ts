import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaDashboard } from '@app/models/ReservaDashboard';
import { DashbordService } from '@app/services/dashbord.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reserve-agora',
  templateUrl: './reserve-agora.component.html',
  styleUrls: ['./reserve-agora.component.scss']
})
export class ReserveAgoraComponent implements OnInit {

  modalRef?: BsModalRef;
  form: FormGroup;

  reserva = {} as ReservaDashboard;

  get f(): any {
    return this.form.controls;
  }

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false,
    };
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localeService: BsLocaleService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private service: DashbordService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      qtdAdultos: ['', Validators.required],
      qtdCriancas: ['', Validators.required],
      qtdApartamentos: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      cpf: ['', Validators.required],
    });
  }

  public salvarReserva(): void {
    if (this.form.valid) {
      this.reserva.categoria = 2;
      this.reserva.dataEntrada = this.form.value.dataEntrada.toISOString().split('T')[0];
      this.reserva.dataSaida = this.form.value.dataSaida.toISOString().split('T')[0];
      this.reserva.primeiroNome = this.form.value.primeiroNome;
      this.reserva.sobrenome = this.form.value.sobrenome;
      this.reserva.email = this.form.value.email;
      this.reserva.telefone = this.form.value.telefone;
      this.reserva.celular = this.form.value.celular;
      this.reserva.qtdAdultos = this.form.value.qtdAdultos;
      this.reserva.qtdCriancas = this.form.value.qtdCriancas;
      this.reserva.qtdApartamentos = this.form.value.qtdApartamentos;
      this.reserva.cpf = this.form.value.cpf;
      this.service.post(this.reserva).subscribe({
        next: (resp) => {
          console.log(resp);
        }
      });
    }
  }

  modalCadastro(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }
}
