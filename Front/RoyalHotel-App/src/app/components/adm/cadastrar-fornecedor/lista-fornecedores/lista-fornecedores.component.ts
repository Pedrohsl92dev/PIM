import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '@app/services/fornecedor.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-fornecedores',
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.scss']
})
export class ListaFornecedoresComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;
  fornecedores: any[] = [];

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: FornecedorService
  ) { }

  ngOnInit(): void {
    this.buscarFornecedores();
  }

  decline(): void {
    this.modalRef.hide();
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

  excluir(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.buscarFornecedores();
      }
    });
  }

  editar(id: number): void {
    this.router.navigate([`/cadastrar-fornecedor`, id]);
  }

  public buscarFornecedores(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.fornecedores = resp;
      }
    });
  }

}
