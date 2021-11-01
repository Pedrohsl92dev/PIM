import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ApartamentoService {

  baseURL = environment.apiURL + 'cadastro-apartamento';

  constructor(private http: HttpClient) {}

  public saveApartamento(apartamento: CadastroApartamento): Observable<CadastroApartamento> {
    return this.http
      .post<CadastroApartamento>(this.baseURL, apartamento)
      .pipe(take(1));
  }
}
