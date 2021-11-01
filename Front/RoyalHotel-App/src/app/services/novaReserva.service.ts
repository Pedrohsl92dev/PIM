import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Reserva } from '@app/models/Reserva';
import { Conta } from '@app/models/Conta';

@Injectable()
export class NovaReservaService {
  baseURL = environment.apiURL + 'hospede';

  baseURLReserva = environment.apiURL + 'reserva';

  baseURLConta = environment.apiURL + 'conta';

  constructor(private http: HttpClient) { }

  public get(): Observable<Hospede[]> {
    return this.http
    .get<Hospede[]>(this.baseURL)
    .pipe(take(1));
  }

  public getReservas(): Observable<Reserva[]> {
    return this.http
    .get<Reserva[]>(this.baseURLConta)
    .pipe(take(1));
  }

  public postReserva(reserva: Reserva): Observable<Reserva> {
    return this.http
    .post<Reserva>(this.baseURLReserva, reserva)
    .pipe(take(1));
  }

  public postConta(conta: Conta): Observable<Conta> {
    return this.http
    .post<Conta>(this.baseURLConta, conta)
    .pipe(take(1));
  }

}
