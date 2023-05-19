import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'start-angular';
  selectedItems: any = [];
  onInvoicesView: boolean = true;

  handleSelectedItem(item: any): void {
    if(this.selectedItems.length==0){
        this.selectedItems.push({ ...item, quantity: 1 })
      }else{
        let itemIdx = this.selectedItems.findIndex((x:any)=> x.id==item.id)
        if(itemIdx>-1){
          this.selectedItems[itemIdx].quantity+=1
        }else{
          this.selectedItems.push({ ...item, quantity: 1 })
        }
      }
    this.onInvoicesView = false;
  }
  handlePerformedEvent() {
    this.onInvoicesView = true;
    this.selectedItems = [];
  }
}
