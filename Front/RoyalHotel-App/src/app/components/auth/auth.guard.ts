import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  id: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('categoria') !== null && localStorage.getItem('categoria') === '1' ) {
      return true;
    } else {
      this.toastr.error('Você não tem permissão para esta rota.', 'Erro!');
      localStorage.clear();
      // this.id = localStorage.getItem('id');
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
