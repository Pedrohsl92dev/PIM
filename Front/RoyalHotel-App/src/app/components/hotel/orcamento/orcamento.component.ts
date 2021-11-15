import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Orcamento } from '@app/models/Orcamento';
import { OrcamentoService } from '@app/services/orcamento.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
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
    private toastr: ToastrService,
    private orcamentoService: OrcamentoService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      qtdAdultos: ['', Validators.required],
      qtdCriancas: ['', Validators.required],
      qtdApartamentos: ['', Validators.required],
      observacao: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public resetForm(): void {
    this.form.reset();
    this.router.navigate([`dashboard`]);
  }

  public salvarOrcamento(): void {
    if (this.orcamento.qtdAdultos < 0) {
      this.orcamento.qtdAdultos = 0;
    }
    if (this.orcamento.qtdCriancas < 0) {
      this.orcamento.qtdCriancas = 0;
    }
    if (this.orcamento.qtdApartamentos < 0) {
      this.orcamento.qtdApartamentos = 0;
    }
    if (this.form.valid) {
      this.orcamento.dataEntrada = this.form.value.dataEntrada.toISOString().split('T')[0];
      this.orcamento.dataSaida = this.form.value.dataSaida.toISOString().split('T')[0];
      this.orcamento.nome = this.form.value.nome;
      this.orcamento.cidade = this.form.value.cidade;
      this.orcamento.estado = this.form.value.estado;
      this.orcamento.observacao = this.form.value.observacao;
      this.orcamento.email = this.form.value.email;
      this.orcamento.telefone = this.form.value.telefone;
      this.orcamento.celular = this.form.value.celular;
      this.orcamento.qtdAdultos = this.form.value.qtdAdultos;
      this.orcamento.qtdCriancas = this.form.value.qtdCriancas;
      this.orcamento.qtdApartamentos = this.form.value.qtdApartamentos;
      this.orcamentoService.post(this.orcamento).subscribe(
        () => {
          this.toastr.success('Orçamento enviado com Sucesso!', ' Sucesso');
          this.form.reset();
          this.router.navigate([`/dashboard`]);
        },
        (error: any) => {
          this.toastr.error('Erro ao enviar orçamento.', 'Erro!');
          console.log(error);
        }
      );
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
