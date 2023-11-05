import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const isApiRequest = request.url.startsWith('https://api.pokemontcg.io/');

      if (isApiRequest) {
        request = request.clone({
          setHeaders: {
            'Authorization': 'X-Api-Key 01a2d0f0-53a3-47b6-bbcf-92b1ca0f8ff8'
          }
        });
      }

      return next.handle(request);
    }
}
