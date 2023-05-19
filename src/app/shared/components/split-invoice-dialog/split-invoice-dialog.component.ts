import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-split-invoice-dialog',
  templateUrl: './split-invoice-dialog.component.html',
  styleUrls: ['./split-invoice-dialog.component.scss'],
})
export class SplitInvoiceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.numbers = Array(10)
      .fill(1)
      .map((x, i) => i);
  }
  nbClient = 1;
  numbers: Array<number> = [];

  counter(i: number) {
    return new Array(i);
  }
}
