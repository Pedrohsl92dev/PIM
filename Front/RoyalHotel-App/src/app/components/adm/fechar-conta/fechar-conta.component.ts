import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fechar-conta',
  templateUrl: './fechar-conta.component.html',
  styleUrls: ['./fechar-conta.component.scss']
})
export class FecharContaComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-money-bill-alt';
  @Input() subtitulo = 'Fechar Conta';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

}
