import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospede } from '@app/models/Hospede';
import { HospedeService } from '@app/services/hospede.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hospede-lista',
  templateUrl: './hospede-lista.component.html',
  styleUrls: ['./hospede-lista.component.scss']
})
export class HospedeListaComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  hospedes: any[] = [];

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: HospedeService
  ) { }

  ngOnInit(): void {
    this.listarHospedes();
  }

  decline(): void {
    this.modalRef.hide();
  }

  menu(): void {
    this.router.navigate([`/adm`]);
  }

  listarHospedes(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.hospedes = resp;
      }
    });
  }

  excluir(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.listarHospedes();
      }
    });
  }

  editar(id: number): void {
    this.router.navigate([`/cadastro-hospede`, id]);
  }


}
