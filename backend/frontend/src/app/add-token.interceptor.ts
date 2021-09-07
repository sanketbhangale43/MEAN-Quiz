import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.cookieService.get('token');
    if (token == null || token == undefined) {
      token = "0";
    }
    const headers = request.headers.set("token", token);
    const req = request.clone({ headers })
    return next.handle(req);
  }
}
