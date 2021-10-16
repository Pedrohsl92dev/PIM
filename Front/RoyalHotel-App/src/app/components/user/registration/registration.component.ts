import { ValidatorField } from './../../../helpers/ValidatorField';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from '@app/models/CadastroUsuarioSite';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  usuario = {} as CadastroUsuario;

  constructor(public fb: FormBuilder) { }

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
      sobreNome: ['', Validators.required],
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
      this.usuario = { ...this.form.value };
      console.log(this.usuario);
    }
  }

}
