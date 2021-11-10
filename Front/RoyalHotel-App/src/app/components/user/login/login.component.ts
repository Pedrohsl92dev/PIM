import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '@app/services/funcionario.service';
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
  id: number;
  usuarioFuncionario: any;
  localStorage: any;

  constructor(
    private service: RegistrarUsuarioService,
    private serviceFuncionario: FuncionarioService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buscarUsuario();
    this.buscarUsuarioFuncionario();
  }

  public buscarUsuario(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.usuario = resp;
      }
    });
  }

  public buscarUsuarioFuncionario(): void {
    this.serviceFuncionario.getFuncionario().subscribe({
      next: (resp) => {
        this.usuarioFuncionario = resp;
      }
    });
  }

  entrar(userName: any, password: any): void {
    this.usuario.forEach((el: any) => {
      if (el.usuario === userName && el.senha === password) {
        this.id = el.id;
        this.localStorage = el.categoria;
        localStorage.setItem('categoria', el.categoria);
        localStorage.setItem('id', el.id);
        this.toastr.success('Bem vindo!', ' Sucesso');
      }
    });
    this.usuarioFuncionario.forEach((el: any) => {
      if (el.usuario === userName && el.senha === password) {
        this.id = el.id;
        this.localStorage = el.categoria;
        localStorage.setItem('categoria', el.categoria);
        localStorage.setItem('id', el.id);
        this.toastr.success('Bem vindo!', ' Sucesso');
      }
    });
    if (this.localStorage === '1') {
      this.router.navigate([`/adm`]);
    } else {
      this.router.navigate([`/user/hospede`, this.id]);
    }
  }

}
