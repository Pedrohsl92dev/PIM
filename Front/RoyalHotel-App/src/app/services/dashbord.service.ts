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

  baseURL = environment.apiURL + 'reservar-agora';

  constructor(private http: HttpClient) { }

  public post(reserva: ReservaDashboard): Observable<ReservaDashboard> {
    return this.http
      .post<ReservaDashboard>(this.baseURL, reserva)
      .pipe(take(1));
  }

}
