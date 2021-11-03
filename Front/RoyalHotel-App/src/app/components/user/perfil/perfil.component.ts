import { ValidatorField } from './../../../helpers/ValidatorField';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { RegistrarUsuarioService } from '@app/services/registrarUsuario.service';
import { DashbordService } from '@app/services/dashbord.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  @Input() titulo: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';

  modalRef: BsModalRef;
  usuario: any;
  idUsuario: string;
  cpfLogado: any;
  reserva: any;
  reservaUsuario: any[] = [];
  sobrenome: string;
  nome: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private service: RegistrarUsuarioService,
    private serviceDashbord: DashbordService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.validation();
    this.loggedIn();
    this.buscarUsuario();
    this.activeRoute.params.subscribe((params) => {
      this.idUsuario = params.id;
    });
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      senha: ['', [Validators.minLength(6), Validators.nullValidator]],
      confirmeSenha: ['', Validators.nullValidator]
    }, formOptions);
  }

  public deletarReserva(id: number): void {
    this.serviceDashbord.delete(id).subscribe({
      next: () => {
        this.toastr.success('Reserva Deletada.', 'Sucesso!');
      }
    });
  }

  loggedIn(): void {
    const token = localStorage.getItem('categoria');
    console.log('categoria =>', token);
  }

  public buscarReserva(): void {
    this.reservaUsuario = [];
    this.serviceDashbord.get().subscribe({
      next: (resp) => {
        this.reserva = resp;
        this.reserva.forEach((el: any) => {
          if (this.cpfLogado === el.cpf) {
            this.reservaUsuario.push(el);
          }
        });
      }
    });
  }

  public buscarUsuario(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.usuario = resp;
        this.usuario.forEach((el: any) => {
          if (el.id.toString() === this.idUsuario) {
            this.nome = el.primeiroNome;
            this.sobrenome = el.sobrenome;
            this.cpfLogado = el.cpf;
          }
        });
        console.log(this.usuario);
        this.buscarReserva();
      }
    });
  }

  // Conveniente para pegar um FormField apenas com a letra F
  get f(): any { return this.form.controls; }

  onSubmit(): void {
    // Vai parar aqui se o form estiver inválido
    if (this.form.invalid) {
      return;
      // this.toastr.error('Preencha os campos necessários.', 'Erro!');
    }
  }

  decline(): void {
    this.modalRef.hide();
  }

  listar(): void {
    this.router.navigate([`/adm`]);
  }


  public resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }
}
