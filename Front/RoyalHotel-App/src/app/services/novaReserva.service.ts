import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Reserva } from '@app/models/Reserva';
import { CadastroApartamento } from '@app/models/CadastroApartamento';

@Injectable()
export class NovaReservaService {

  baseURL = environment.apiURL + 'hospede';

  baseURLHospede = environment.apiURL + 'hospede';

  baseURLApartamento = environment.apiURL + 'apartamento';

  baseURLReserva = environment.apiURL + 'reserva';

  constructor(private http: HttpClient) { }

  public getHospedes(): Observable<Hospede[]> {
    return this.http
    .get<Hospede[]>(this.baseURLHospede)
    .pipe(take(1));
  }

  public getReservas(): Observable<Reserva[]> {
    return this.http
    .get<Reserva[]>(this.baseURLReserva)
    .pipe(take(1));
  }

  public getApartamentos(): Observable<CadastroApartamento[]> {
    return this.http
    .get<CadastroApartamento[]>(this.baseURLApartamento)
    .pipe(take(1));
  }

  public post(reserva: Reserva): Observable<Reserva> {
    return this.http
    .post<Reserva>(this.baseURLReserva, reserva)
    .pipe(take(1));
  }
}
