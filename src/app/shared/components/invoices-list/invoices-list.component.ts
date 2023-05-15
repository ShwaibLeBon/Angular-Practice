import { Component, OnInit } from '@angular/core';
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
    });
  }
}
