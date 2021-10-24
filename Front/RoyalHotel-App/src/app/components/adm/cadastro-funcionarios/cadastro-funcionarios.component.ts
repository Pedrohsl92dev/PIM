import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroFuncionario } from '@app/models/CadastroFuncionario';
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

  funcionario = {} as CadastroFuncionario;

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
  ) { }

  ngOnInit(): void {
  }

  public validacao(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  public navegar(): void {
    this.router.navigate([`/listar-funcionario`]);
  }

  cadastrarFuncionario(): void {

  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public resetForm(): void {
    this.form.reset();
  }

}
