import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-inicio-adm',
  templateUrl: './inicio-adm.component.html',
  styleUrls: ['./inicio-adm.component.scss']
})
export class InicioAdmComponent implements OnInit {

  modalRef?: BsModalRef;

  status = 'Livre';
  class = 'btn btn-success btn-lg';
  status2 = 'Livre';
  class2 = 'btn btn-success btn-lg';
  status3 = 'Livre';
  class3 = 'btn btn-success btn-lg';
  status4 = 'Livre';
  class4 = 'btn btn-success btn-lg';
  status5 = 'Livre';
  class5 = 'btn btn-success btn-lg';
  status6 = 'Livre';
  class6 = 'btn btn-success btn-lg';
  status7 = 'Livre';
  class7 = 'btn btn-success btn-lg';
  status8 = 'Livre';
  class8 = 'btn btn-success btn-lg';
  status9 = 'Livre';
  class9 = 'btn btn-success btn-lg';
  status10 = 'Livre';
  class10 = 'btn btn-success btn-lg';
  status11 = 'Livre';
  class11 = 'btn btn-success btn-lg';
  status12 = 'Livre';
  class12 = 'btn btn-success btn-lg';
  status13 = 'Livre';
  class13 = 'btn btn-success btn-lg';
  status14 = 'Livre';
  class14 = 'btn btn-success btn-lg';
  status15 = 'Livre';
  class15 = 'btn btn-success btn-lg';
  status16 = 'Livre';
  class16 = 'btn btn-success btn-lg';
  status17 = 'Livre';
  class17 = 'btn btn-success btn-lg';
  status18 = 'Livre';
  class18 = 'btn btn-success btn-lg';

  apartamentos: any[] = [];

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  modalCadastro(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  reservar(): void {
    this.status = 'Ocupado';
    this.class = 'btn btn-danger btn-lg';
  }

  desocupar(): void {
    this.status = 'Livre';
    this.class = 'btn btn-success btn-lg';
  }

  reservar02(): void {
    this.status2 = 'Ocupado';
    this.class2 = 'btn btn-danger btn-lg';
  }

  desocupar02(): void {
    this.status2 = 'Livre';
    this.class2 = 'btn btn-success btn-lg';
  }

  reservar03(): void {
    this.status3 = 'Ocupado';
    this.class3 = 'btn btn-danger btn-lg';
  }

  desocupar03(): void {
    this.status3 = 'Livre';
    this.class3 = 'btn btn-success btn-lg';
  }
  reservar04(): void {
    this.status4 = 'Ocupado';
    this.class4 = 'btn btn-danger btn-lg';
  }

  desocupar04(): void {
    this.status4 = 'Livre';
    this.class4 = 'btn btn-success btn-lg';
  }
  reservar05(): void {
    this.status5 = 'Ocupado';
    this.class5 = 'btn btn-danger btn-lg';
  }

  desocupar05(): void {
    this.status5 = 'Livre';
    this.class5 = 'btn btn-success btn-lg';
  }
  reservar06(): void {
    this.status6 = 'Ocupado';
    this.class6 = 'btn btn-danger btn-lg';
  }

  desocupar06(): void {
    this.status6 = 'Livre';
    this.class6 = 'btn btn-success btn-lg';
  }
  reservar07(): void {
    this.status7 = 'Ocupado';
    this.class7 = 'btn btn-danger btn-lg';
  }

  desocupar07(): void {
    this.status7 = 'Livre';
    this.class7 = 'btn btn-success btn-lg';
  }
  reservar08(): void {
    this.status8 = 'Ocupado';
    this.class8 = 'btn btn-danger btn-lg';
  }

  desocupar08(): void {
    this.status8 = 'Livre';
    this.class8 = 'btn btn-success btn-lg';
  }
  reservar09(): void {
    this.status9 = 'Ocupado';
    this.class9 = 'btn btn-danger btn-lg';
  }

  desocupar09(): void {
    this.status9 = 'Livre';
    this.class9 = 'btn btn-success btn-lg';
  }
  reservar10(): void {
    this.status10 = 'Ocupado';
    this.class10 = 'btn btn-danger btn-lg';
  }

  desocupar10(): void {
    this.status10 = 'Livre';
    this.class10 = 'btn btn-success btn-lg';
  }
  reservar11(): void {
    this.status11 = 'Ocupado';
    this.class11 = 'btn btn-danger btn-lg';
  }

  desocupar11(): void {
    this.status11 = 'Livre';
    this.class11 = 'btn btn-success btn-lg';
  }
  reservar12(): void {
    this.status12 = 'Ocupado';
    this.class12 = 'btn btn-danger btn-lg';
  }

  desocupar12(): void {
    this.status12 = 'Livre';
    this.class12 = 'btn btn-success btn-lg';
  }
  reservar13(): void {
    this.status13 = 'Ocupado';
    this.class13 = 'btn btn-danger btn-lg';
  }

  desocupar13(): void {
    this.status13 = 'Livre';
    this.class13 = 'btn btn-success btn-lg';
  }
  reservar14(): void {
    this.status14 = 'Ocupado';
    this.class14 = 'btn btn-danger btn-lg';
  }

  desocupar14(): void {
    this.status14 = 'Livre';
    this.class14 = 'btn btn-success btn-lg';
  }
  reservar15(): void {
    this.status15 = 'Ocupado';
    this.class15 = 'btn btn-danger btn-lg';
  }

  desocupar15(): void {
    this.status15 = 'Livre';
    this.class15 = 'btn btn-success btn-lg';
  }
  reservar16(): void {
    this.status16 = 'Ocupado';
    this.class16 = 'btn btn-danger btn-lg';
  }

  desocupar16(): void {
    this.status16 = 'Livre';
    this.class16 = 'btn btn-success btn-lg';
  }
  reservar17(): void {
    this.status17 = 'Ocupado';
    this.class17 = 'btn btn-danger btn-lg';
  }

  desocupar17(): void {
    this.status17 = 'Livre';
    this.class17 = 'btn btn-success btn-lg';
  }
  reservar18(): void {
    this.status18 = 'Ocupado';
    this.class18 = 'btn btn-danger btn-lg';
  }

  desocupar18(): void {
    this.status18 = 'Livre';
    this.class18 = 'btn btn-success btn-lg';
  }

}
