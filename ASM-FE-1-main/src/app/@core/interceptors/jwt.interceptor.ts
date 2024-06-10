import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler,
  HttpRequest, HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any): Observable<any> => {
        return error;
      }),
    );
  }
  injectToken(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {},
      body: '',
    });
  }
}
