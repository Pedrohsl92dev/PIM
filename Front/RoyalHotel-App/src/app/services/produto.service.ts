import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '@app/models/Fornecedor';
import { Produto } from '@app/models/Produto';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ProdutoService {

  baseURL = environment.apiURL + 'produto';

  baseURLFonecedor = environment.apiURL + 'fornecedor';

  constructor(private http: HttpClient) {}

  public get(): Observable<Fornecedor[]> {
    return this.http
    .get<Fornecedor[]>(this.baseURLFonecedor)
    .pipe(take(1));
  }

  public post(produto: Produto): Observable<Produto> {
    return this.http
    .post<Produto>(this.baseURL, produto)
    .pipe(take(1));
  }

  public getProduto(): Observable<Produto[]> {
    return this.http
    .get<Produto[]>(this.baseURL)
    .pipe(take(1));
  }

  public put(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(`${this.baseURL}/edit/${produto.id}`, produto)
      .pipe(take(1));
  }

  public getById(id: number): Observable<Produto> {
    return this.http
      .get<Produto>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public delete(id: number): Observable<Produto> {
    return this.http
      .delete<Produto>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }
}
