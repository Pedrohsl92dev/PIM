import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Orcamento } from '@app/models/Orcamento';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  form: FormGroup;
  orcamento = {} as Orcamento;

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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      dataChegada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      qtdAdultos: ['', Validators.required],
      qtdCriancas: ['', Validators.required],
      qtdApartamentos: ['', Validators.required],
      observacao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public resetForm(): void {
    this.form.reset();
    this.router.navigate([`dashboard`]);
  }

  public salvarOrcamento(): void {
    if (this.form.valid) {
      this.orcamento = { ...this.form.value };
    }
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
