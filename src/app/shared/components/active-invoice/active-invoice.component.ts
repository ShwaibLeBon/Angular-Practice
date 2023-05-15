import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoicesService } from 'src/app/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-active-invoice',
  templateUrl: './active-invoice.component.html',
  styleUrls: ['./active-invoice.component.scss'],
})
export class ActiveInvoiceComponent {
  invoiceId: number = 2023040021;
  quantity: any = 1;
  totalPrice: any = 0;

  constructor(private invoiceService: InvoicesService) {}

  @Input() items: any = [];
  @Output() eventPerfomed = new EventEmitter();

  increment(item: any) {
    item.quantity++;
  }
  decrement(item: any) {
    if (item.quantity === 1) return;
    else item.quantity--;
  }

  useFormattedMoney = (x: any) => {
    if (!x) return 0;
    x = parseFloat(x).toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  calculateTotal(): void {
    this.totalPrice = this.items
      .map((item: any) => item.price * item.quantity)
      .reduce((sum: number, item: any) => sum + item, 0);
  }

  saveInvoice() {
    this.calculateTotal();
    const data = {
      number: this.invoiceId,
      customer_name: 'Shwaib LeBon',
      total: this.totalPrice,
    };
    this.invoiceService.createInvoice(data).subscribe((invoice) => {
      this.eventPerfomed.emit();
      return invoice;
    });
  }

  cancelInvoice() {
    this.eventPerfomed.emit();
  }
  returnToInvoices() {
    this.eventPerfomed.emit();
  }
}
