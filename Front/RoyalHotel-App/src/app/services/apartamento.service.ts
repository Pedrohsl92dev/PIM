import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Apartamento } from '@app/models/Apartamento';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ApartamentoService {
  baseURL = '';

  constructor(private http: HttpClient) {}

  public getApartamentosByHospedeId(hospedeId: number): Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(`${this.baseURL}/${hospedeId}`).pipe(take(1));
  }

  public saveApartamento(hospedeId: number, apartamento: Apartamento[]): Observable<Apartamento[]> {
    return this.http
      .put<Apartamento[]>(`${this.baseURL}/${hospedeId}`, apartamento)
      .pipe(take(1));
  }

  public deleteApartamento(hospedeId: number, loteId: number): Observable<any> {
    return this.http
      .delete(`${this.baseURL}/${hospedeId}/${loteId}`)
      .pipe(take(1));
  }
}
