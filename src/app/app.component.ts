import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'start-angular';
  selectedItems: any = [];
  selectedInvoice: any = {};
  onInvoicesView: boolean = true;
  isViewingInvoiceDetails: boolean = false;

  handleSelectedItem(item: any): void {
    this.selectedItems.push({ ...item, quantity: 1 });
    this.onInvoicesView = false;
    this.isViewingInvoiceDetails = false;
  }

  handleSelectedInvoice(item: any): void {
    this.selectedInvoice = item;
    this.isViewingInvoiceDetails = true;
    this.onInvoicesView = false;
  }

  handlePerformedEvent() {
    this.onInvoicesView = true;
    this.isViewingInvoiceDetails = false;
    this.selectedItems = [];
    this.selectedInvoice = {};
  }
}
