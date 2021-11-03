import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  mostrarAdm = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tipoUsuario();
  }

  showMenu(): boolean {
    return this.router.url !== '/user/login';
  }

  loggerIn(): boolean {
    return true;
  }

  sair(): void {
    localStorage.clear();
    this.router.navigate([`/dashboard`]);
  }

  tipoUsuario(): void {
    if (localStorage.getItem('categoria') !== null && localStorage.getItem('categoria') === '1') {
      this.mostrarAdm = true;
    } else {
      this.mostrarAdm = false;
    }
  }
}
