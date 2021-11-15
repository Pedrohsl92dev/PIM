import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '@app/models/Fornecedor';
import { FornecedorService } from '@app/services/fornecedor.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  fornecedor = {} as Fornecedor;

  estadoSalvar = 'post';
  fornecedorId: number;

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
    private service: FornecedorService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
    this.carregarFornecedor();
  }

  public validation(): void {
    this.form = this.fb.group({
      razaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
      ie: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      complemento: [''],
    });
  }

  cadastrarFornecedor(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-unused-expression
      this.fornecedor = this.estadoSalvar === 'post' ? { ...this.form.value } : { id: this.fornecedor.id, ...this.form.value };
      this.service[this.estadoSalvar](this.fornecedor).subscribe(
        () => {
          this.toastr.success('Fornecedor cadastrado com Sucesso!', ' Sucesso');
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

  public carregarFornecedor(): void {
    this.fornecedorId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.fornecedorId !== null && this.fornecedorId !== 0) {
      this.estadoSalvar = 'put';
      this.service.getById(this.fornecedorId).subscribe(
        (fornecedor: Fornecedor) => {
          this.fornecedor = {...fornecedor};
          this.form.patchValue(this.fornecedor);
        }
      );
    }

  }


  public resetForm(): void {
    this.form.reset();
  }

  listar(): void {
    this.router.navigate([`/listar-fornecedor`]);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
