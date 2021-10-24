import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastrarApartamentoService {

  baseURL = environment.apiURL + 'cadastrar-apartamento';

  constructor(private http: HttpClient) { }

  public post(ap: CadastroApartamento): Observable<CadastroApartamento> {
    return this.http
      .post<CadastroApartamento>(this.baseURL, ap)
      .pipe(take(1));
  }

}
