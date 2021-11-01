import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class HospedeService {
  baseURL = environment.apiURL + 'cadastro-hospede';

  baseURLEndereco = environment.apiURL + 'endereco';

  constructor(private http: HttpClient) { }

  public getHospedes(): Observable<Hospede[]> {
    return this.http.get<Hospede[]>(this.baseURL).pipe(take(1));
  }

  public post(hospede: Hospede): Observable<Hospede> {
    return this.http
      .post<Hospede>(this.baseURL, hospede)
      .pipe(take(1));
  }

  public get(): Observable<Hospede[]> {
    return this.http
      .get<Hospede[]>(this.baseURL)
      .pipe(take(1));
  }
}
