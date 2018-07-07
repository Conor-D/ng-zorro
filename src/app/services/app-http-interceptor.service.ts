import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private spinner: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.spinner.isLoading = true;
    return next.handle(req)
      .pipe(
        tap(
          res => {
            if (res instanceof HttpResponse)
              this.spinner.isLoading = false;
          }
        ),
        catchError(
          error => {
            this.spinner.isLoading = false;
            return throwError(error);
          }
        )
      );
  }
}
