import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private modal: NzModalService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let obs: Observable<boolean>, warnings: string;
    
    if (this.authService.isLoggedIn) {
      warnings = `Your session has time out, please log on again.`;
      obs = this.authService.isExpired;
    } else {
      warnings = `You haven't log on yet.`;
      obs = of(false);
    }
    return obs.pipe(
      tap(unexpired => {
        unexpired || this.modal.warning({
          nzTitle: 'Access Failed',
          nzContent: ':) , ' + warnings,
          nzOnOk: () => { this.router.navigate(['login'], { queryParams: { returnUrl: state.url } }); }
        });
      }),
      catchError(error => {
        this.modal.warning({
          nzTitle: 'Access Failed',
          nzContent: ':) , ' + 'Request failed with code 401.',
          nzOnOk: () => { this.router.navigate([''])}
        });
        return throwError(error);
      })
    );
  }
}
