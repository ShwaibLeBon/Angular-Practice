import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
})
export class InvoiceDetailComponent {
  @Input() item: any = {};
  @Output() eventPerfomed = new EventEmitter();

  useFormattedMoney = (x: any) => {
    if (!x) return 0;
    x = parseFloat(x).toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  returnToInvoices() {
    this.eventPerfomed.emit();
  }
}
