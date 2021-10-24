import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Apartamento } from '@app/models/Apartamento';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ApartamentoService {

  constructor(private http: HttpClient) {}

  // public saveApartamento(hospedeId: number, apartamento: Apartamento[]): Observable<Apartamento[]> {
  //   return this.http
  //     .put<Apartamento[]>(`${this.baseURL}/${hospedeId}`, apartamento)
  //     .pipe(take(1));
  // }
}
