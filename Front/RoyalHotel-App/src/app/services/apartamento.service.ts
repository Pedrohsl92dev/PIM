import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ApartamentoService {

  baseURL = environment.apiURL + 'apartamento';

  constructor(private http: HttpClient) {}

  public post(apartamento: CadastroApartamento): Observable<CadastroApartamento> {
    return this.http
    .post<CadastroApartamento>(this.baseURL, apartamento)
    .pipe(take(1));
  }

  public get(): Observable<CadastroApartamento[]> {
    return this.http
    .get<CadastroApartamento[]>(this.baseURL)
    .pipe(take(1));
  }

  public put(apartamento: CadastroApartamento): Observable<CadastroApartamento> {
    return this.http
      .put<CadastroApartamento>(`${this.baseURL}/edit/${apartamento.id}`, apartamento)
      .pipe(take(1));
  }

  public getById(id: number): Observable<CadastroApartamento> {
    return this.http
      .get<CadastroApartamento>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public delete(id: number): Observable<CadastroApartamento> {
    return this.http
      .delete<CadastroApartamento>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }
}
