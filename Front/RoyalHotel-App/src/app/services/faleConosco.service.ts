import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FaleConosco } from '@app/models/FaleConosco';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaleConoscoService {

  baseURL = environment.apiURL + 'fale-conosco';

  constructor(private http: HttpClient) { }

  public post(faleConosco: FaleConosco): Observable<FaleConosco> {
    return this.http
      .post<FaleConosco>(this.baseURL, faleConosco)
      .pipe(take(1));
  }

  public get(): Observable<FaleConosco[]> {
    return this.http
      .get<FaleConosco[]>(this.baseURL)
      .pipe(take(1));
  }
}
