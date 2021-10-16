import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '@app/models/Fornecedor';
import { Produtos } from '@app/models/Produtos';
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

  produto = {} as Produtos;

  modalRef: BsModalRef;

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
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      quantidade: ['', Validators.required],
      dataValidade: ['', Validators.required],
      marca: ['', Validators.required],
      valor: ['', Validators.required],
      fornecedor: this.fb.array([]),
    });
  }

  listar(): void {
    this.router.navigate([`/listar-produto`]);
  }

  public cadastrarFornecedor(fornecedor: Fornecedor): void {
    this.form = this.fb.group({
      id: [fornecedor.id],
      razaoSocial: ['', Validators.required],
      cnpf: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      ie: ['', Validators.required],
    });
  }

  public resetForm(): void {
    this.router.navigate([`adm`]);
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }
}
