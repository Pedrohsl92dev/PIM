import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  decline(): void {
    this.modalRef.hide();
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

}
