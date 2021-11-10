import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class HospedeService {
  baseURL = environment.apiURL + 'hospede';

  constructor(private http: HttpClient) { }

  public getHospedes(): Observable<Hospede[]> {
    return this.http.get<Hospede[]>(this.baseURL).pipe(take(1));
  }

  public post(hospede: Hospede): Observable<Hospede> {
    return this.http
    .post<Hospede>(this.baseURL, hospede)
    .pipe(take(1));
  }

  public put(hospede: Hospede): Observable<Hospede> {
    return this.http
      .put<Hospede>(`${this.baseURL}/edit/${hospede.id}`, hospede)
      .pipe(take(1));
  }

  public get(): Observable<Hospede[]> {
    return this.http
      .get<Hospede[]>(this.baseURL)
      .pipe(take(1));
  }

  public getById(id: number): Observable<Hospede> {
    return this.http
      .get<Hospede>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public delete(id: number): Observable<Hospede> {
    return this.http
      .delete<Hospede>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }


}
