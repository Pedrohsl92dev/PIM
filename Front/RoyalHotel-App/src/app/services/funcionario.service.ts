import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '@app/models/Funcionario';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class FuncionarioService {

  baseURL = environment.apiURL + 'cadastro-funcionario';

  constructor(private http: HttpClient) {}

  public post(funcionario: Funcionario): Observable<Funcionario> {
    return this.http
    .post<Funcionario>(this.baseURL, funcionario)
    .pipe(take(1));
  }

  public put(funcionario: Funcionario): Observable<Funcionario> {
    return this.http
      .put<Funcionario>(`${this.baseURL}/edit/${funcionario.id}`, funcionario)
      .pipe(take(1));
  }

  public getById(id: number): Observable<Funcionario> {
    return this.http
      .get<Funcionario>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public get(): Observable<Funcionario[]> {
    return this.http
    .get<Funcionario[]>(this.baseURL)
    .pipe(take(1));
  }

  public delete(id: number): Observable<Funcionario> {
    return this.http
      .delete<Funcionario>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }
}
