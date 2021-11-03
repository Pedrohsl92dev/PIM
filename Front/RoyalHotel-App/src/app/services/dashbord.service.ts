import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservaDashboard } from '@app/models/ReservaDashboard';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  baseURL = environment.apiURL + 'reserve-agora';

  constructor(private http: HttpClient) { }

  public post(reserva: ReservaDashboard): Observable<ReservaDashboard> {
    return this.http
    .post<ReservaDashboard>(this.baseURL, reserva)
    .pipe(take(1));
  }

  public get(): Observable<ReservaDashboard[]> {
    return this.http
    .get<ReservaDashboard[]>(this.baseURL)
    .pipe(take(1));
  }

  public delete(id: number): Observable<any> {
    return this.http
    .delete<any>(`${this.baseURL}/delete/${id}`)
    .pipe(take(1));
  }

}
