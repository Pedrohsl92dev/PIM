import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Pedido } from '@app/models/Pedido';

@Injectable()
export class PedidoService {
  baseURL = environment.apiURL + 'pedido';

  constructor(private http: HttpClient) { }

  public post(pedido: Pedido): Observable<Pedido> {
    return this.http
    .post<Pedido>(this.baseURL, pedido)
    .pipe(take(1));
  }

  public get(): Observable<Pedido[]> {
    return this.http
      .get<Pedido[]>(this.baseURL)
      .pipe(take(1));
  }
}
