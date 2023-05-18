import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { StoreModule } from '@ngxs/store';
// import { NgxsModule, NgxsModuleOptions } from '@ngxs/store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  ItemsComponent,
  ActiveInvoiceComponent,
  InvoicesListComponent,
} from './shared/components';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// export const ngxsConfig: NgxsModuleOptions = {
//   developmentMode: true,
//   selectorOptions: {
//     // These Selector Settings are recommended in preparation for NGXS v4
//     // (See above for their effects)
//     suppressErrors: false,
//     injectContainerState: false,
//   },
//   compatibility: {
//     strictContentSecurityPolicy: true,
//   },
//   // Execution strategy overridden for illustrative purposes
//   // (only do this if you know what you are doing)
//   // executionStrategy: NoopNgxsExecutionStrategy
// };
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    InvoicesListComponent,
    ActiveInvoiceComponent,
  ],
  imports: [
    MatSlideToggleModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // StatesModule,
    // StoreModule.forRoot({ PersonState }, {}),
    // NgxsModule.forRoot([PersonState], ngxsConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
