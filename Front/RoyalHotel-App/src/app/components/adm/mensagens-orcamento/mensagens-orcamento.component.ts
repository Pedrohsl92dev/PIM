import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaleConoscoService } from '@app/services/faleConosco.service';
import { OrcamentoService } from '@app/services/orcamento.service';

@Component({
  selector: 'app-mensagens-orcamento',
  templateUrl: './mensagens-orcamento.component.html',
  styleUrls: ['./mensagens-orcamento.component.scss']
})
export class MensagensOrcamentoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-envelope-open-text icons';
  @Input() subtitulo = 'Desde 2021';

  mensagensUsuario: any[] = [];

  constructor(
    private router: Router,
    private orcamentoService: OrcamentoService
  ) { }

  ngOnInit(): void {
    this.mensagens();
  }

  public mensagens(): void {
    this.orcamentoService.get().subscribe({
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
