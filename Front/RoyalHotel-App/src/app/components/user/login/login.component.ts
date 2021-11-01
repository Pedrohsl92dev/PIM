import { Component, OnInit } from '@angular/core';
import { RegistrarUsuarioService } from '@app/services/registrarUsuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: any;
  userName: any;
  password: any;

  constructor(
    private service: RegistrarUsuarioService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.buscarUsuario();
  }

  public buscarUsuario(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.usuario = resp;
      }
    });
  }

  entrar(userName: any, password: any): void {
    this.usuario.forEach((el: any) => {
      if (el.usuario === userName && el.senha === password) {
        this.toastr.success('Bem vindo!', ' Sucesso');
      } else {
        this.toastr.error('Usuário ou senha inválidos.', 'Erro!');
      }
    });
  }

}
