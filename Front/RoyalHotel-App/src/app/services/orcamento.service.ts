import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orcamento } from '@app/models/Orcamento';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  baseURL = environment.apiURL + 'orcamento';

  constructor(private http: HttpClient) { }

  public post(orcamento: Orcamento): Observable<Orcamento> {
    return this.http
      .post<Orcamento>(this.baseURL, orcamento)
      .pipe(take(1));
  }

  public get(): Observable<Orcamento[]> {
    return this.http
      .get<Orcamento[]>(this.baseURL)
      .pipe(take(1));
  }

  public delete(id: number): Observable<Orcamento> {
    return this.http
      .delete<Orcamento>(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

}
