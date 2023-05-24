import { Component, Inject } from '@angular/core';
import { InvoicesService } from 'src/app/core';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private invoiceService: InvoicesService) {
    this.clientItems=data.items
    this.invoice = data
  }

  nbClient = 1;
  arr:any=[];
  clientItems:any=[];
  invoice:any=null;
  cleanedItems:any=[];

  hanlderChange(){
    this.arr=[]
    if(this.nbClient){
      for(let i =1;i<=this.nbClient;i++){
       var el = {'client':i, 'items':[] as any[]};
        for (let x=1;x<=this.clientItems.length;x++){
          el.items.push({'element':0,'elementId':this.clientItems[x-1].itemId,"unitPrice":this.clientItems[x-1].unitPrice});
        }
        this.arr.push(el);
      }
      console.log(this.arr)
    }
  }
  splitInvoice(){
    console.log(this.arr) 
    for(let x =0;x<this.arr.length;x++){
      let customer_name = `client ${this.arr[x].client}`
      let total = this.arr[x].items.map((item: any) => item.element * item.unitPrice)
                          .reduce((sum: number, item: any) => sum + item, 0);
      const invoice = {
        customer_name : customer_name,
        number : this.arr[x].items.length,
        total : total
      }
      let singleInvoiceEl = {'invoice':invoice, 'data':[] as any[]};
      for(let y=0;y<this.arr[x].items.length;y++){
        const data = {
          itemId:this.arr[x].items[y].elementId,
          quantity:this.arr[x].items[y].element,
          unitPrice:this.arr[x].items[y].unitPrice,
          totalPrice:this.arr[x].items[y].element*this.arr[x].items[y].unitPrice
        }
        singleInvoiceEl.data.push(data)
      }
      this.cleanedItems.push(singleInvoiceEl)
    }
    this.invoiceService.splitInvoice(this.invoice.id,this.cleanedItems).subscribe((invoice) => {
      return invoice;
    });
  }
  counter(i: number) {
    return new Array(i);
  }
}
