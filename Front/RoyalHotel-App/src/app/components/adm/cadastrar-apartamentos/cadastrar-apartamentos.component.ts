import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { ApartamentoService } from '@app/services/apartamento.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-apartamentos',
  templateUrl: './cadastrar-apartamentos.component.html',
  styleUrls: ['./cadastrar-apartamentos.component.scss']
})
export class CadastrarApartamentosComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  apartamento = {} as CadastroApartamento;

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
    private localeService: BsLocaleService,
    private activatedRouter: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private apartamentoService: ApartamentoService,
    private router: Router,
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validacao();
  }

  public validacao(): void {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      andar: ['', Validators.required],
      tamanho: ['', Validators.required],
      categoria: ['', Validators.required],
      imagem: ['', Validators.required]
    });
  }

  cadastrarApartamento(): void {
    if (this.form.valid) {
      this.apartamento = { ...this.form.value };
      this.apartamentoService.saveApartamento(this.apartamento).subscribe(
        () => {
          this.toastr.success('Apartamento cadastrado com Sucesso!', ' Sucesso');
          this.form.reset();
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
    this.router.navigate([`/listar-apartamento`]);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public resetForm(): void {
    this.form.reset();
  }

}
