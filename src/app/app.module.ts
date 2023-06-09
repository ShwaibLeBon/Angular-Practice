import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  ItemsComponent,
  ActiveInvoiceComponent,
  InvoicesListComponent,
} from './shared/components';
import { SplitInvoiceDialogComponent } from './shared/components/split-invoice-dialog/split-invoice-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceDetailComponent } from './shared/components/invoice-detail/invoice-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    InvoicesListComponent,
    ActiveInvoiceComponent,
    SplitInvoiceDialogComponent,
    InvoiceDetailComponent,
  ],
  imports: [
    MatSlideToggleModule,
    MatDialogModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
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
