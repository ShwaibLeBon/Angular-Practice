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
    this.selectedItems.push({ ...item, quantity: 1 });
    this.onInvoicesView = false;
  }

  handlePerformedEvent() {
    this.onInvoicesView = true;
  }
}
