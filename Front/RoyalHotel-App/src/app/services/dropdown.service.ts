import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr(): any {
    return this.http.get<any[]>('assets/dados/Estados.json');
  }

  getCidades(idEstado: number): any {
    return this.http.get<any[]>('assets/dados/Cidades.json').pipe(
      // tslint:disable-next-line:triple-equals
      map((cidades: any[]) => cidades.filter(c => c.Estado == idEstado))
    );
  }

}
