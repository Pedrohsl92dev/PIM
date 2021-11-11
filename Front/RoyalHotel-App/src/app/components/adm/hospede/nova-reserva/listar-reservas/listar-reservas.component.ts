import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovaReservaService } from '@app/services/novaReserva.service';
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

  reservas: any[] = [];
  hospedes: any[] = [];
  apartamentos: any[] = [];

  constructor(
    private router: Router,
    private service: NovaReservaService
  ) { }

  ngOnInit(): void {
    this.buscarReserva();
    this.buscarHospede();
    this.buscarApartamento();
  }

  decline(): void {
    this.modalRef.hide();
  }

  public buscarReserva(): void {
    this.service.getReservas().subscribe({
      next: (resp) => {
        this.reservas = resp;
      }
    });
  }

  public buscarHospede(): void {
    this.service.getHospedes().subscribe({
      next: (resp) => {
        this.hospedes = resp;
        this.trataDadosHospede();
      }
    });
  }

  public buscarApartamento(): void {
    this.service.getApartamentos().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
        this.trataDadosApartamento();
      }
    });
  }

  public trataDadosHospede(): void {
    this.reservas.forEach((el: any) => {
      for (const i of this.hospedes) {
        if (el.hospede_id === i.id) {
          el.nomeHospede = i.nome;
          el.cpf = i.cpf;
        }
      }
    });
  }

  public trataDadosApartamento(): void {
    this.reservas.forEach((el: any) => {
      for (const i of this.apartamentos) {
        if (el.apartamento_id === i.id) {
          el.numeroApartamento = i.numero;
        }
      }
    });
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

}
