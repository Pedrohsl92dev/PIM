import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '@app/models/Pedido';
import { ApartamentoService } from '@app/services/apartamento.service';
import { NovaReservaService } from '@app/services/novaReserva.service';
import { PedidoService } from '@app/services/pedido.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fas fa-clipboard-list';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;

  pedidos: any[] = [];
  apartamentos: any[] = [];
  dadosHospedes: any[] = [];
  reservas: any[] = [];

  codigoHospede: number;
  codigoApartamento: number;

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: PedidoService,
  ) { }

  ngOnInit(): void {
    this.buscarPedido();
  }

  public buscarPedido(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.pedidos = resp;
        this.buscarReservas();
      }
    });
  }

  public buscarReservas(): void {
    this.service.getReservas().subscribe({
     next: (resp) => {
       this.reservas = resp;
       this.buscarHospede();
       this.buscarApartamento();
       this.trataDadosApartamento();
     }
   });
 }

  public buscarHospede(): void {
    this.service.getHospede().subscribe({
      next: (resp) => {
        this.dadosHospedes = resp;
      }
    });
  }

  public buscarApartamento(): void {
    this.service.getApartamento().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
      }
    });
  }

  public trataDadosApartamento(): void {
    this.pedidos.forEach((el0: any) => {
      for (const i of this.reservas) {
        if (el0.apartamento_id === i.apartamento_id) {

        }
      }
    });
  }

  navegar(): void {
    this.router.navigate([`/adm`]);
  }

  decline(): void {
    this.modalRef.hide();
  }

}
