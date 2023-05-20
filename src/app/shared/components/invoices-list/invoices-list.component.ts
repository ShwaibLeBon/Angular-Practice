import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InvoicesService } from 'src/app/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SplitInvoiceDialogComponent } from '../split-invoice-dialog/split-invoice-dialog.component';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
})
export class InvoicesListComponent implements OnInit {
  invoices = [];

// //DECOMMENTER KUGIRA UKORESHE STATIC VALUES ZA ITEMS
/*export class InvoicesListComponent {
  invoices = [
    {
      id: 1,
      number: 15,
      customerName: 'Niyungeko Carmel',
      total: 3,
      createdAt: '2023-05-12T12:51:29.805Z',
      updatedAt: '2023-05-12T12:51:29.805Z',
    },
    {
      id: 2,
      number: 16,
      customerName: 'Ngendakumana Hermes',
      total: 4,
      createdAt: '2023-05-12T12:51:29.805Z',
      updatedAt: '2023-05-12T12:51:29.805Z',
    },
    {
      id: 10,
      number: 12,
      customerName: 'Niyungeko Carmel',
      total: 200,
      createdAt: '2023-05-12T14:01:15.173Z',
      updatedAt: '2023-05-12T14:01:15.173Z',
    },
  ];*/

  constructor(
    private invoiceService: InvoicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoice: any) => {
      this.invoices = invoice;
      console.log('items fetched', this.invoices);
    });
  }

  @Output() selectedItem = new EventEmitter();

  selectItem(item: any) {
    this.selectedItem.emit(item);
  }

  viewDetail(item: any) {
    this.selectedItem.emit(item);
  }

  openDialog(data: any) {
    this.dialog.open(SplitInvoiceDialogComponent, {
      data: data,
    });
  }

  useFormattedMoney = (x: any) => {
    if (!x) return 0;
    x = parseFloat(x).toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
}
