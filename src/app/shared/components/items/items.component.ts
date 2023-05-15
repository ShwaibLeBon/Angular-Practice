import { Component, EventEmitter, Output } from '@angular/core';
import { items } from 'src/app/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  items = items;

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
