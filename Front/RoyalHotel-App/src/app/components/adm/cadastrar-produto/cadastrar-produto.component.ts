import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '@app/models/Fornecedor';
import { Produto } from '@app/models/Produto';
import { ProdutoService } from '@app/services/produto.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fab fa-product-hunt';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  produto = {} as Produto;
  fornecedores: any[] = [];
  produtos: any[] = [];

  modalRef: BsModalRef;

  estadoSalvar = 'post';
  produtoId: number;

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false,
    };
  }

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService,
    private activatedRouter: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private router: Router,
    private service: ProdutoService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
    this.buscarFornecedor();
    this.buscarProduto();
    this.carregarProduto();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      quantidade: ['', Validators.required],
      dataValidade: ['', Validators.required],
      marca: ['', Validators.required],
      valor: ['', Validators.required],
      fornecedor_id: ['', Validators.required],
    });
  }

  listar(): void {
    this.router.navigate([`/listar-produto`]);
  }

  public cadastroFornecedor(): void {
    this.router.navigate([`/cadastrar-fornecedor`]);
  }

  public resetForm(): void {
    this.router.navigate([`adm`]);
    this.form.reset();
  }

  public buscarFornecedor(): void {
    this.service.get().subscribe(
      (resp) => {
        this.fornecedores = resp;
      }
    );
  }

  public buscarProduto(): void {
    this.service.getProduto().subscribe(
      (resp) => {
        this.produtos = resp;
      }
    );
  }

  public cadastrarProduto(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-unused-expression
      this.produto = this.estadoSalvar === 'post' ? { ...this.form.value } : { id: this.produto.id, ...this.form.value };
      this.service[this.estadoSalvar](this.produto).subscribe(
        () => {
          this.toastr.success('Produto cadastrado com Sucesso!', ' Sucesso');
          this.form.reset();
        },
        (error: any) => {
          this.toastr.error('Erro ao efetuar cadastro.', 'Erro!');
          console.log(error);
        }
      );
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public carregarProduto(): void {
    this.produtoId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.produtoId !== null && this.produtoId !== 0) {
      this.estadoSalvar = 'put';
      this.service.getById(this.produtoId).subscribe(
        (produto: Produto) => {
          this.produto = {...produto};
          this.form.patchValue(this.produto);
        }
      );
    }
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }
}
