import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartamentoService } from '@app/services/apartamento.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-apartamento',
  templateUrl: './listar-apartamento.component.html',
  styleUrls: ['./listar-apartamento.component.scss']
})
export class ListarApartamentoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;

  apartamentos: any[] = [];

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: ApartamentoService
  ) { }

  ngOnInit(): void {
    this.listarApartamento();
  }

  excluir(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.listarApartamento();
      }
    });
  }

  editar(id: number): void {
    this.router.navigate([`/cadastrar-apartamento`, id]);
  }

  decline(): void {
    this.modalRef.hide();
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

  listarApartamento(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
      }
    });
  }
}
