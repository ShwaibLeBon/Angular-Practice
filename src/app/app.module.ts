import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {
  ItemsComponent,
  ActiveInvoiceComponent,
  InvoicesListComponent,
} from './shared/components';
import { SplitInvoiceDialogComponent } from './shared/components/split-invoice-dialog/split-invoice-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    InvoicesListComponent,
    ActiveInvoiceComponent,
    SplitInvoiceDialogComponent,
  ],
  imports: [
    MatSlideToggleModule,
    MatDialogModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // NgxsModule.forRoot([PersonState], ngxsConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
