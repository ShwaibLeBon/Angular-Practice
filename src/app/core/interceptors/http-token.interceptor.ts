import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Store } from '@ngxs/store';
// import { AuthState } from '../../shared';
// import { environment } from '../../../environments/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    // private store: Store,
    @Inject(LOCALE_ID) protected localeId: string
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: '',
    };

    // const token = this.store.select(state => state.authtoken);
    // const token = this.store.selectSnapshot(AuthState.token);
    const token = null;

    if (token) {
      const authKey = 'Authorization';
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
