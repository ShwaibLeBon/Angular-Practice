import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { InvoicesService } from 'src/app/core';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
})
export class InvoicesListComponent implements OnInit {
  invoices = [];

  constructor(private invoiceService: InvoicesService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoice: any) => {
      this.invoices = invoice;
      console.log("items fetched", this.invoices)
    });
  }

  @Output() selectedItem = new EventEmitter();

  selectItem(item: any) {
    this.selectedItem.emit(item);
  }

  useFormattedMoney = (x: any) => {
    if (!x) return 0;
    x = parseFloat(x).toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
}
