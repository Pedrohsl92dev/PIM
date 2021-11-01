import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaleConoscoService } from '@app/services/faleConosco.service';

@Component({
  selector: 'app-mensagens-fale-conosco',
  templateUrl: './mensagens-fale-conosco.component.html',
  styleUrls: ['./mensagens-fale-conosco.component.scss']
})
export class MensagensFaleConoscoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-envelope-open-text icons';
  @Input() subtitulo = 'Desde 2021';

  mensagensUsuario: any[] = [];

  constructor(
    private router: Router,
    private faleConoscoService: FaleConoscoService,
  ) { }

  ngOnInit(): void {
    this.mensagens();
  }

  public mensagens(): void {
    this.faleConoscoService.get().subscribe({
      next: (resp) => {
        this.mensagensUsuario = resp;
      }
    });
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

  decline(): void {

  }
}
