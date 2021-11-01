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
      this.hospede = { ...this.form.value };
      this.hospede.categoria = 2;
      this.service.post(this.hospede).subscribe(
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
