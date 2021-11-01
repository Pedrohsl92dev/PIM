import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashbordService } from '@app/services/dashbord.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listar-reservas-site',
  templateUrl: './listar-reservas-site.component.html',
  styleUrls: ['./listar-reservas-site.component.scss']
})
export class ListarReservasSiteComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;
  reservaSite: any[] = [];

  constructor(
    private router: Router,
    private service: DashbordService
  ) { }

  ngOnInit(): void {
    this.reservas();
  }

  public reservas(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.reservaSite = resp;
        console.log(this.reservaSite);
      }
    });
  }

  decline(): void {
    this.modalRef.hide();
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

}
