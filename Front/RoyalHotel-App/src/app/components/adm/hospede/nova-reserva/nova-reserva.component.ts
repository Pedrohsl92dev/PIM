import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '@app/models/Reserva';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.scss']
})
export class NovaReservaComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  form: FormGroup;

  reserva = {} as Reserva;
  apartamento: any[] = [];

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
      hospede: ['', Validators.required],
      apartamento: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(100)]],
      statusPagamento: ['', Validators.required],
      tipoQuarto: ['', Validators.required],
    });
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }

  public resetForm(): void {
    this.router.navigate([`/adm`]);
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
