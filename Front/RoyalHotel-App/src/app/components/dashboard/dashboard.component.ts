import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { Router } from '@angular/router';
import { ReservaDashboard } from '@app/models/ReservaDashboard';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DashbordService } from '@app/services/dashbord.service';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  reserva = {} as ReservaDashboard;

  modalRef?: BsModalRef;

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
    private modalService: BsModalService,
    private localeService: BsLocaleService,
    private router: Router,
    private fb: FormBuilder,
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

  solicitarPreco(): void {
    this.router.navigate([`hotel/orcamento`]);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }



}
