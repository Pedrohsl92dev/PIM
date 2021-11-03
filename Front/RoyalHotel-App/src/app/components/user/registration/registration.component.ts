import { ValidatorField } from './../../../helpers/ValidatorField';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from '@app/models/CadastroUsuarioSite';
import { RegistrarUsuarioService } from '@app/services/registrarUsuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  usuario = {} as CadastroUsuario;

  constructor(
    private fb: FormBuilder,
    private usuarioService: RegistrarUsuarioService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['',
        [Validators.required, Validators.email]
      ],
      usuario: ['', Validators.required],
      senha: ['',
        [Validators.required, Validators.minLength(6)]
      ],
      confirmeSenha: ['', Validators.required],
    }, formOptions);
  }

  public cadastroUsuario(): void {
    if (this.form.valid) {
      this.usuario.categoria = 2;
      this.usuario.primeiroNome = this.form.value.primeiroNome;
      this.usuario.sobrenome = this.form.value.sobrenome;
      this.usuario.cpf = this.form.value.cpf;
      this.usuario.email = this.form.value.email;
      this.usuario.usuario = this.form.value.usuario;
      this.usuario.senha = this.form.value.senha;
      this.usuario.confirmeSenha = this.form.value.confirmeSenha;
      this.usuarioService.post(this.usuario).subscribe(
        () => {
          this.toastr.success('Cadastro realizado com Sucesso!', ' Sucesso');
          this.form.reset();
          this.router.navigate([`/user/login`]);
        },
        (error: any) => {
          this.toastr.error('Erro ao cadastrar usuário.', 'Erro!');
          console.log(error);
        }
      );
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

}
