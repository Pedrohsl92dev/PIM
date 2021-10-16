import { Hospede } from '../models/Hospede';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class HospedeService {
  baseURL = environment.apiURL + '';

  constructor(private http: HttpClient) { }

  public getHospedes(): Observable<Hospede[]> {
    return this.http.get<Hospede[]>(this.baseURL).pipe(take(1));
  }

  public getHospedesByTema(tema: string): Observable<Hospede[]> {
    return this.http
      .get<Hospede[]>(`${this.baseURL}/${tema}/tema`)
      .pipe(take(1));
  }

  public getHospedeById(id: number): Observable<Hospede> {
    return this.http
      .get<Hospede>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public post(hospede: Hospede): Observable<Hospede> {
    return this.http
      .post<Hospede>(this.baseURL, hospede)
      .pipe(take(1));
  }

  public put(hospede: Hospede): Observable<Hospede> {
    return this.http
      .put<Hospede>(`${this.baseURL}/${hospede.id}`, hospede)
      .pipe(take(1));
  }

  public deleteHospede(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  postUpload(hospedeId: number, file: File): Observable<Hospede> {
    const fileToUpload = file[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload);

    return this.http
      .post<Hospede>(`${this.baseURL}/upload-image/${hospedeId}`, formData)
      .pipe(take(1));
  }
}
