import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '@app/services/funcionario.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.scss']
})
export class ListaFuncionarioComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;
  funcionarios: any[] = [];

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.buscarFuncionario();
  }

  public adm(): void {
    this.router.navigate([`/adm`]);
  }

  decline(): void {
    this.modalRef.hide();
  }

  buscarFuncionario(): void {
    this.service.getFuncionario().subscribe({
      next: (resp) => {
        this.funcionarios = resp;
      }
    });
  }


}
