import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import * as Services from './services';
// import * as Guards from './guards';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor, HttpTokenInterceptor } from './interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    Services.ApiService,
    Services.InvoicesService,
  ],
})
export class CoreModule {}
