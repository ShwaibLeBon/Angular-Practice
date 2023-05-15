import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { Store, Select } from '@ngxs/store';

// import { AuthState } from 'app/shared/states/auth';
// import { AuthState } from '../../shared/states/auth';
// import { UserService } from '../services';
// import { Logout } from '../../shared';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  // @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<any>;
  // isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
  isAuthenticated = true;
  constructor(private router: Router) {}
  // userService: UserService = new UserService();

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        if (error.status === 401 || error.status === 403) {
          console.log('WRONG RESPONSE: LOGGING OUT USER... ');
          // this.store.dispatch(new Logout());
          // this.router.navigate(['/']);
        }

        //   if (!(error.error instanceof Object) || !error.error.errors) {

        //     return throwError(
        //       new HttpErrorResponse({
        //         error: new_error,
        //         headers: error.headers,
        //         status: error.status,
        //         statusText: error.statusText,
        //         url: error.url,
        //       })
        //     );
        //   }

        console.error(errorMessage, '\nError Object:', error.error);
        return throwError(error);
      })
    );
  }
}
