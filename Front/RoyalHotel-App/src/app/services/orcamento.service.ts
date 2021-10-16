import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orcamento } from '@app/models/Orcamento';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  baseURL = environment.apiURL + 'cadastro-usuario';

  constructor(private http: HttpClient) { }

  public post(orcamento: Orcamento): Observable<Orcamento> {
    return this.http
      .post<Orcamento>(this.baseURL, orcamento)
      .pipe(take(1));
  }

}
