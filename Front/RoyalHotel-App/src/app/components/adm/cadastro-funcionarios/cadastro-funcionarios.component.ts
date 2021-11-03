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
      this.funcionario = { ...this.form.value };
      this.funcionario.categoria = 1;
      console.log(this.funcionario);
      this.service.saveFuncionario(this.funcionario).subscribe(
        () => {
          this.toastr.success('Funcionário cadastrado com Sucesso!', ' Sucesso');
          this.form.reset();
          this.router.navigate([`/adm`]);
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

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public resetForm(): void {
    this.form.reset();
  }

}
