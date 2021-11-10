import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '@app/models/Fornecedor';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class FornecedorService {

  baseURL = environment.apiURL + 'fornecedor';

  constructor(private http: HttpClient) {}

  public post(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http
    .post<Fornecedor>(this.baseURL, fornecedor).pipe(take(1));
  }

  public get(): Observable<Fornecedor[]> {
    return this.http
    .get<Fornecedor[]>(this.baseURL).pipe(take(1));
  }
}
