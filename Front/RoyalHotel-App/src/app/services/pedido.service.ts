import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Pedido } from '@app/models/Pedido';
import { Produto } from '@app/models/Produto';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { Hospede } from '@app/models/Hospede';
import { Reserva } from '@app/models/Reserva';
import { Conta } from '@app/models/Conta';

@Injectable()
export class PedidoService {

  baseURL = environment.apiURL + 'pedido';

  baseURLHospede = environment.apiURL + 'hospede';

  baseURLProduto = environment.apiURL + 'produto';

  baseURLApartamento = environment.apiURL + 'apartamento';

  baseURLReserva = environment.apiURL + 'reserva';

  baseURLConta = environment.apiURL + 'conta';

  constructor(private http: HttpClient) { }

  public post(pedido: Pedido): Observable<Pedido> {
    return this.http
    .post<Pedido>(this.baseURL, pedido)
    .pipe(take(1));
  }

  public postConta(conta: Conta): Observable<Conta> {
    return this.http
    .post<Conta>(this.baseURLConta, conta)
    .pipe(take(1));
  }

  public put(pedido: Pedido): Observable<Pedido> {
    return this.http
      .put<Pedido>(`${this.baseURL}/edit/${pedido.id}`, pedido)
      .pipe(take(1));
  }

  public getById(id: number): Observable<Pedido> {
    return this.http
      .get<Pedido>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public delete(id: number): Observable<Pedido> {
    return this.http
      .delete<Pedido>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public get(): Observable<Pedido[]> {
    return this.http
      .get<Pedido[]>(this.baseURL)
      .pipe(take(1));
  }

  public getApartamento(): Observable<CadastroApartamento[]> {
    return this.http
      .get<CadastroApartamento[]>(this.baseURLApartamento)
      .pipe(take(1));
  }

  public getReservas(): Observable<Reserva[]> {
    return this.http
    .get<Reserva[]>(this.baseURLReserva)
    .pipe(take(1));
  }

  public getHospede(): Observable<Hospede[]> {
    return this.http
      .get<Hospede[]>(this.baseURLHospede)
      .pipe(take(1));
  }

  public getProdutos(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(this.baseURLProduto)
      .pipe(take(1));
  }
}
