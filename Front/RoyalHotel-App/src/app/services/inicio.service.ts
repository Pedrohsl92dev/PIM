import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Reserva } from '@app/models/Reserva';
import { CadastroApartamento } from '@app/models/CadastroApartamento';
import { Conta } from '@app/models/Conta';
import { FecharConta } from '@app/models/FecharConta';

@Injectable()
export class InicioService {

  baseURL = environment.apiURL + 'hospede';

  baseURLHospede = environment.apiURL + 'hospede';

  baseURLApartamento = environment.apiURL + 'apartamento';

  baseURLReserva = environment.apiURL + 'reserva';

  baseURLConta = environment.apiURL + 'conta';

  baseURLFecharConta = environment.apiURL + 'fecharConta';

  constructor(private http: HttpClient) { }

  public getHospedes(): Observable<Hospede[]> {
    return this.http
    .get<Hospede[]>(this.baseURLHospede)
    .pipe(take(1));
  }

  public getContas(): Observable<Conta[]> {
    return this.http
    .get<Conta[]>(this.baseURLConta)
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

  public postFecharConta(fecharConta: FecharConta): Observable<FecharConta> {
    return this.http
    .post<FecharConta>(this.baseURLFecharConta, fecharConta)
    .pipe(take(1));
  }

  public deleteConta(id: number): Observable<Conta> {
    return this.http
      .delete<Conta>(`${this.baseURLConta}/${id}`)
      .pipe(take(1));
  }
}
