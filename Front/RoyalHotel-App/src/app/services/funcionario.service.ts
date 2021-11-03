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

  public saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http
    .post<Funcionario>(this.baseURL, funcionario)
    .pipe(take(1));
  }

  public getFuncionario(): Observable<Funcionario[]> {
    return this.http
    .get<Funcionario[]>(this.baseURL)
    .pipe(take(1));
  }
}
