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
/*  calculateTotal(): void {
    this.totalPrice = this.items
      .map((item: any) => item.salePrice * item.quantity)
      .reduce((sum: number, item: any) => sum + item, 0);
  }*/
  splitInvoice(){  
    this.arr.forEach((x:any)=>{
      let customer_name = `client ${x.client}`
      let total = x.items.map((item: any) => item.element * item.unitPrice)
                          .reduce((sum: number, item: any) => sum + item, 0);
      const invoice = {
        customer_name : customer_name,
        number : x.items.length,
        total : total
      }
      x.items.forEach((y:any)=>{
        const data = {
          itemId:x.elementId,
          quantity:x.element,
          unitPrice:x.unitPrice,
          totalPrice:x.element*x.unitPrice
        }
        this.cleanedItems.push(data)
      })
    })

    console.log(this.arr)
    console.log(this.invoice)
    this.invoiceService.splitInvoice(this.invoice.id,this.arr).subscribe((invoice) => {
      return invoice;
    });
  }
  counter(i: number) {
    return new Array(i);
  }
}
