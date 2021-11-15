import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FecharConta } from '@app/models/FecharConta';
import { HospedeService } from '@app/services/hospede.service';
import { InicioService } from '@app/services/inicio.service';
import { NovaReservaService } from '@app/services/novaReserva.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio-adm',
  templateUrl: './inicio-adm.component.html',
  styleUrls: ['./inicio-adm.component.scss']
})
export class InicioAdmComponent implements OnInit {

  modalRef?: BsModalRef;

  apartamento101 = 101;
  hospede101: string;
  status1 = 'Livre';
  class1 = 'btn btn-success btn-lg';

  apartamento102 = 102;
  hospede102: string;
  status2 = 'Livre';
  class2 = 'btn btn-success btn-lg';

  apartamento103 = 103;
  hospede103: string;
  status3 = 'Livre';
  class3 = 'btn btn-success btn-lg';

  apartamento104 = 104;
  hospede104: string;
  status4 = 'Livre';
  class4 = 'btn btn-success btn-lg';

  apartamento105 = 105;
  hospede105: string;
  status5 = 'Livre';
  class5 = 'btn btn-success btn-lg';

  apartamento106 = 106;
  hospede106: string;
  status6 = 'Livre';
  class6 = 'btn btn-success btn-lg';

  apartamento201 = 201;
  hospede201: string;
  status7 = 'Livre';
  class7 = 'btn btn-success btn-lg';

  apartamento202 = 202;
  hospede202: string;
  status8 = 'Livre';
  class8 = 'btn btn-success btn-lg';

  apartamento203 = 203;
  hospede203: string;
  status9 = 'Livre';
  class9 = 'btn btn-success btn-lg';

  apartamento204 = 204;
  hospede204: string;
  status10 = 'Livre';
  class10 = 'btn btn-success btn-lg';

  apartamento205 = 205;
  hospede205: string;
  status11 = 'Livre';
  class11 = 'btn btn-success btn-lg';

  apartamento206 = 206;
  hospede206: string;
  status12 = 'Livre';
  class12 = 'btn btn-success btn-lg';

  apartamento301 = 301;
  hospede301: string;
  status13 = 'Livre';
  class13 = 'btn btn-success btn-lg';

  apartamento302 = 302;
  hospede302: string;
  status14 = 'Livre';
  class14 = 'btn btn-success btn-lg';

  apartamento303 = 303;
  hospede303: string;
  status15 = 'Livre';
  class15 = 'btn btn-success btn-lg';

  apartamento304 = 304;
  hospede304: string;
  status16 = 'Livre';
  class16 = 'btn btn-success btn-lg';

  apartamento305 = 305;
  hospede305: string;
  status17 = 'Livre';
  class17 = 'btn btn-success btn-lg';

  apartamento306 = 306;
  hospede306: string;
  status18 = 'Livre';
  class18 = 'btn btn-success btn-lg';

  apartamentos: any[] = [];
  hospedes: any[] = [];
  hospede: any[] = [];
  reservas: any[] = [];
  pedidos: any[] = [];
  nomesHospede: any[] = [];
  contas: any;
  nomeHospedeReserva: any[] = [];

  valorTotalContaPedido: any;
  valorTotalContaReserva: any;
  fecharContaReserva: any[] = [];
  fecharContaPedido: any[] = [];

  valorTotalFechamentoReserva: any;
  form: FormGroup;

  idReserva: any;
  idValidarReserva: any;

  idContas: any[] = [];
  dadosFecharConta = {} as FecharConta;

  get f(): any {
    return this.form.controls;
  }

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false,
    };
  }

  constructor(
    private modalService: BsModalService,
    private service: HospedeService,
    private fb: FormBuilder,
    private inicioService: InicioService,
    private toastr: ToastrService,
    private reservaService: NovaReservaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validation();
    this.listarHospedes();
    this.buscarReservas();
    this.buscarApartamentos();
    this.buscarConta();
  }

  public validation(): void {
    this.form = this.fb.group({
      hospede_id: ['', Validators.required],
      dataPagamento:  ['', Validators.required],
      formaDePagamento:  ['', Validators.required],
      valor:  ['', Validators.required],
    });
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public buscarConta(): void {
    this.inicioService.getContas().subscribe({
      next: (resp) => {
        this.contas = resp;
      }
    });
  }

  public fecharConta(): void {
    if (this.form.valid) {
      this.dadosFecharConta = {...this.form.value};
      this.dadosFecharConta.dataPagamento = this.form.value.dataPagamento.toISOString().split('T')[0];
      this.inicioService.postFecharConta(this.dadosFecharConta).subscribe(
        () => {
          this.toastr.success('Reserva Encerrada com Sucesso!', ' Sucesso');
          this.form.reset();
          this.excluirReserva();
          this.excluirConta();
          this.validarReserva(this.idValidarReserva);
          this.fecharContaPedido = [];
          this.fecharContaReserva = [];
        },
        (error: any) => {
          this.toastr.error('Erro ao encerrar reserva.', 'Erro!');
          console.log(error);
        }
      );
      this.modalRef.hide();
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public excluirConta(): void {
    for (const i of this.idContas) {
      this.inicioService.deleteConta(i).subscribe({
        next: () => {}
      });
    }
  }

  public excluirReserva(): void {
    this.reservaService.delete(this.idReserva).subscribe({
      next: () => {}
    });
  }

  public modalCadastro(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  public modalFecharConta(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  public reservarApartamento(): void {
    this.hospede = this.form.value.hospede;
    this.modalRef.hide();
  }

  public listarHospedes(): void {
    this.service.get().subscribe({
      next: (resp) => {
        this.hospedes = resp;
      }
    });
  }

  public buscarReservas(): void {
    this.inicioService.getReservas().subscribe({
      next: (resp) => {
        this.reservas = resp;
      }
    });
  }

  public buscarApartamentos(): void {
    this.inicioService.getApartamentos().subscribe({
      next: (resp) => {
        this.apartamentos = resp;
        this.reservar();
      }
    });
  }

  public reservar(): void {
    this.reservas.forEach((el: any) => {
      for (const i of this.apartamentos) {
        if (el.apartamento_id === i.id) {
          this.hospede.push({numeroApartamento: i.numero, idApartamento: i.id, idhospede: el.hospede_id});
        }
      }
    });
    this.buscarHospede();
  }

  public buscarHospede(): void {
    this.hospede.forEach((el: any) => {
      for (const i of this.hospedes) {
        if (el.idhospede === i.id) {
          this.nomesHospede.push({nomeHospede: i.nome, hospedeId: el.idhospede, numeroApartamento: el.numeroApartamento});
        }
      }
    });
    this.dadosReserva();
    this.buscarNomeHospedeReserva();
  }

  public dadosReserva(): void {
   this.nomesHospede.forEach((el: any) => {
    if (el.numeroApartamento === this.apartamento101) {
      this.status1 = 'Ocupado';
      this.class1 = 'btn btn-danger btn-lg';
      this.hospede101 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento102) {
      this.status2 = 'Ocupado';
      this.class2 = 'btn btn-danger btn-lg';
      this.hospede102 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento103) {
      this.status3 = 'Ocupado';
      this.class3 = 'btn btn-danger btn-lg';
      this.hospede103 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento104) {
      this.status4 = 'Ocupado';
      this.class4 = 'btn btn-danger btn-lg';
      this.hospede104 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento105) {
      this.status5 = 'Ocupado';
      this.class5 = 'btn btn-danger btn-lg';
      this.hospede105 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento106) {
      this.status6 = 'Ocupado';
      this.class6 = 'btn btn-danger btn-lg';
      this.hospede106 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento201) {
      this.status7 = 'Ocupado';
      this.class7 = 'btn btn-danger btn-lg';
      this.hospede201 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento202) {
      this.status8 = 'Ocupado';
      this.class8 = 'btn btn-danger btn-lg';
      this.hospede202 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento203) {
      this.status9 = 'Ocupado';
      this.class9 = 'btn btn-danger btn-lg';
      this.hospede203 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento204) {
      this.status10 = 'Ocupado';
      this.class10 = 'btn btn-danger btn-lg';
      this.hospede204 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento205) {
      this.status11 = 'Ocupado';
      this.class11 = 'btn btn-danger btn-lg';
      this.hospede205 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento206) {
      this.status12 = 'Ocupado';
      this.class12 = 'btn btn-danger btn-lg';
      this.hospede206 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento301) {
      this.status13 = 'Ocupado';
      this.class13 = 'btn btn-danger btn-lg';
      this.hospede301 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento302) {
      this.status14 = 'Ocupado';
      this.class14 = 'btn btn-danger btn-lg';
      this.hospede302 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento303) {
      this.status15 = 'Ocupado';
      this.class15 = 'btn btn-danger btn-lg';
      this.hospede303 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento304) {
      this.status16 = 'Ocupado';
      this.class16 = 'btn btn-danger btn-lg';
      this.hospede304 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento305) {
      this.status17 = 'Ocupado';
      this.class17 = 'btn btn-danger btn-lg';
      this.hospede305 = el.nomeHospede;
    }
    if (el.numeroApartamento === this.apartamento306) {
      this.status18 = 'Ocupado';
      this.class18 = 'btn btn-danger btn-lg';
      this.hospede306 = el.nomeHospede;
    }
   });
  }

  public validarReserva(id: number): void {
    if (id === this.apartamento101) {
      this.status1 = 'Livre';
      this.class1 = 'btn btn-lg btn-success';
      this.hospede101 = '';
    }
    if (id === this.apartamento102) {
      this.status2 = 'Livre';
      this.class2 = 'btn btn-lg btn-success';
      this.hospede102 = '';
    }
    if (id === this.apartamento103) {
      this.status3 = 'Livre';
      this.class3 = 'btn btn-lg btn-success';
      this.hospede103 = '';
    }
    if (id === this.apartamento104) {
      this.status4 = 'Livre';
      this.class4 = 'btn btn-lg btn-success';
      this.hospede104 = '';
    }
    if (id === this.apartamento105) {
      this.status5 = 'Livre';
      this.class5 = 'btn btn-lg btn-success';
      this.hospede105 = '';
    }
    if (id === this.apartamento106) {
      this.status6 = 'Livre';
      this.class6 = 'btn btn-lg btn-success';
      this.hospede106 = '';
    }
    if (id === this.apartamento201) {
      this.status7 = 'Livre';
      this.class7 = 'btn btn-lg btn-success';
      this.hospede201 = '';
    }
    if (id === this.apartamento202) {
      this.status8 = 'Livre';
      this.class8 = 'btn btn-lg btn-success';
      this.hospede202 = '';
    }
    if (id === this.apartamento203) {
      this.status9 = 'Livre';
      this.class9 = 'btn btn-lg btn-success';
      this.hospede203 = '';
    }
    if (id === this.apartamento204) {
      this.status10 = 'Livre';
      this.class10 = 'btn btn-lg btn-success';
      this.hospede204 = '';
    }
    if (id === this.apartamento205) {
      this.status11 = 'Livre';
      this.class11 = 'btn btn-lg btn-success';
      this.hospede205 = '';
    }
    if (id === this.apartamento206) {
      this.status12 = 'Livre';
      this.class12 = 'btn btn-lg btn-success';
      this.hospede206 = '';
    }
    if (id === this.apartamento301) {
      this.status13 = 'Livre';
      this.class13 = 'btn btn-lg btn-success';
      this.hospede301 = '';
    }
    if (id === this.apartamento302) {
      this.status14 = 'Livre';
      this.class14 = 'btn btn-lg btn-success';
      this.hospede302 = '';
    }
    if (id === this.apartamento303) {
      this.status15 = 'Livre';
      this.class15 = 'btn btn-lg btn-success';
      this.hospede303 = '';
    }
    if (id === this.apartamento304) {
      this.status16 = 'Livre';
      this.class16 = 'btn btn-lg btn-success';
      this.hospede304 = '';
    }
    if (id === this.apartamento305) {
      this.status17 = 'Livre';
      this.class17 = 'btn btn-lg btn-success';
      this.hospede305 = '';
    }
    if (id === this.apartamento306) {
      this.status18 = 'Livre';
      this.class18 = 'btn btn-lg btn-success';
      this.hospede306 = '';
    }
   }

  public desocupar(id: number): void {
    this.idValidarReserva = id;
    if (id === this.apartamento101) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.idReserva = el2.id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento102) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento103) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento104) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento105) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento106) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento201) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento202) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento203) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento204) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento205) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento206) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento301) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento302) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento303) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento304) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento305) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
    if (id === this.apartamento306) {
      this.fecharContaPedido = [];
      this.fecharContaReserva = [];
      this.valorTotalContaPedido = 0;
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.contas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              this.idContas.push(el2.id);
              this.valorTotalContaPedido += Number(el2.valor);
              this.fecharContaPedido.push(el2);
            }
          });
        }
      });
      this.hospede.forEach((el: any) => {
        if (el.numeroApartamento === id) {
          this.reservas.forEach((el2: any) => {
            if (el2.apartamento_id === el.idApartamento) {
              el2.apartamento = id;
              this.fecharContaReserva.push(el2);
              this.valorTotalContaReserva = el2.valorTotal;
            }
          });
        }
      });
      this.valorTotalFechamentoReserva = (this.valorTotalContaPedido + this.valorTotalContaReserva );
    }
  }

  public buscarNomeHospedeReserva(): void {
    this.reservas.forEach((el: any) => {
      for (const i of this.hospedes) {
        if (el.hospede_id === i.id) {
          this.nomeHospedeReserva.push(i);
        }
      }
    });
  }
}
