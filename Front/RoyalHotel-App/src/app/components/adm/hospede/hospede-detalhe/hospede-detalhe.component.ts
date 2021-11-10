import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospede } from '@app/models/Hospede';
import { HospedeService } from '@app/services/hospede.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hospede-detalhe',
  templateUrl: './hospede-detalhe.component.html',
  styleUrls: ['./hospede-detalhe.component.scss']
})
export class HospedeDetalheComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  hospede = {} as Hospede;
  hospedeId: number;

  estadoSalvar = 'post';

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
    private service: HospedeService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
    this.carregarHospede();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: [''],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      complemento: [''],
    });
  }

  salvarHospede(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-unused-expression
      this.hospede = this.estadoSalvar === 'post' ? { ...this.form.value } : { id: this.hospede.id, ...this.form.value };
      this.hospede.categoria = 2;
      console.log(this.hospedeId);
      console.log(this.estadoSalvar);
      console.log(this.hospede);

      this.service[this.estadoSalvar](this.hospede).subscribe(
        () => {
          this.toastr.success('Hospede cadastrado com Sucesso!', ' Sucesso');
          this.form.reset();
          this.router.navigate([`/adm`]);
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

  public carregarHospede(): void {
    this.hospedeId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.hospedeId !== null && this.hospedeId !== 0) {
      this.estadoSalvar = 'put';
      this.service.getById(this.hospedeId).subscribe(
        (hospede: Hospede) => {
          this.hospede = {...hospede};
          this.form.patchValue(this.hospede);
        }
      );
    }

  }

  public resetForm(): void {
    this.form.reset();
  }

  listar(): void {
    this.router.navigate([`/listar-hospede`]);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
