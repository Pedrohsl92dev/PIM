import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagens-fale-conosco',
  templateUrl: './mensagens-fale-conosco.component.html',
  styleUrls: ['./mensagens-fale-conosco.component.scss']
})
export class MensagensFaleConoscoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-envelope-open-text icons';
  @Input() subtitulo = 'Desde 2021';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

  decline(): void {

  }
}
