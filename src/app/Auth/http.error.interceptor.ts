import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private errorHandler: ErrorHandler,
              private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        // Si el estado es 401 (No Autorizado)
        if (errorResponse.status === 401) {
          this.authService.logout();
        }
        return throwError(errorResponse);
      })
    );
  }
}
