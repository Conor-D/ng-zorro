import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ProgresserService } from './progresser.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private progresser: ProgresserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.progresser.start();
    return next.handle(req)
      .pipe(
        tap(
          res => {
            if (res instanceof HttpResponse) 
              this.progresser.finish();
          }
        ),
        catchError(
          error => {
            this.progresser.finish();
            return throwError(error);
          }
        )
      );
  }
}
