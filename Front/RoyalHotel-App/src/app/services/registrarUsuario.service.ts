import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from '@app/models/CadastroUsuarioSite';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  baseURL = environment.apiURL + 'cadastro-usuario';

  constructor(private http: HttpClient) { }

  public post(usuario: CadastroUsuario): Observable<CadastroUsuario> {
    return this.http
      .post<CadastroUsuario>(this.baseURL, usuario)
      .pipe(take(1));
  }

}
