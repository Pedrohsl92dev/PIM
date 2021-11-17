import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaleConoscoService } from '@app/services/faleConosco.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

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

  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private faleConoscoService: FaleConoscoService,
    private toastr: ToastrService,
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

  excluir(id: number): void {
    this.faleConoscoService.delete(id).subscribe({
      next: (resp) => {
        this.toastr.success('Mensagem deletada!', ' Sucesso');
      }
    });
  }

  decline(): void {
    this.modalRef.hide();
  }
}
