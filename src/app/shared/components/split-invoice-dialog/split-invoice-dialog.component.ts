import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef, } from '@angular/material/dialog';


@Component({
  selector: 'app-split-invoice-dialog',
  templateUrl: './split-invoice-dialog.component.html',
  styleUrls: ['./split-invoice-dialog.component.scss'],
})
export class SplitInvoiceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  nbClient=0;
}
