import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '@app/services/produto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fab fa-product-hunt';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;
  produtos: any[] = [];
  produtosFornecedor: any[] = [];
  fornecedores: any[] = [];
  fornecedorId: number;

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private service: ProdutoService
  ) { }

  ngOnInit(): void {
    this.buscarFornecedor();
    this.buscarProduto();
  }

  decline(): void {
    this.modalRef.hide();
  }

  public buscarProduto(): void {
    this.service.getProduto().subscribe(
      (resp) => {
        this.produtos = resp;
        this.produtos.forEach((el: any) => {
          this.fornecedores.forEach((el2: any) => {
            if (el.fornecedor_id === el2.id) {
              el.nomeFornecedor = el2.razaoSocial;
            }
          });
        });
      }
    );
  }

  public buscarFornecedor(): void {
    this.service.get().subscribe(
      (resp) => {
        this.fornecedores = resp;
      }
    );
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }
}
