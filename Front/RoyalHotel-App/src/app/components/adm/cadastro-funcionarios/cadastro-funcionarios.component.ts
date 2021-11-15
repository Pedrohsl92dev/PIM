import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '@app/models/Funcionario';
import { FuncionarioService } from '@app/services/funcionario.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;
  funcionario = {} as Funcionario;

  funcionarioId: number;

  estadoSalvar = 'post';

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
    private service: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.validacao();
    this.carregarFuncionario();
  }

  public validacao(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      complemento: ['', Validators.required],
      telefone: [''],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  public navegar(): void {
    this.router.navigate([`/listar-funcionario`]);
  }

  cadastrarFuncionario(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-unused-expression
      this.funcionario = this.estadoSalvar === 'post' ? { ...this.form.value } : { id: this.funcionario.id, ...this.form.value };
      this.funcionario.categoria = 1;
      this.service[this.estadoSalvar](this.funcionario).subscribe(
        () => {
          this.toastr.success('Funcionário cadastrado com Sucesso!', ' Sucesso');
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

  public carregarFuncionario(): void {
    this.funcionarioId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.funcionarioId !== null && this.funcionarioId !== 0) {
      this.estadoSalvar = 'put';
      this.service.getById(this.funcionarioId).subscribe(
        (funcionario: Funcionario) => {
          this.funcionario = {...funcionario};
          this.form.patchValue(this.funcionario);
        }
      );
    }
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public resetForm(): void {
    this.form.reset();
  }

}
