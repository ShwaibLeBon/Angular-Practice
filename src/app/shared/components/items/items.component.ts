import { Component, OnInit, EventEmitter, Output } from '@angular/core';
/*import { items } from 'src/app/items';*/
import { ItemsService } from 'src/app/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items = [];

  constructor(
    private itemsService: ItemsService,
  ) {}
  
  @Output() selectedItem = new EventEmitter();

  selectItem(item: any) {
    this.selectedItem.emit(item);
  }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((item: any) => {
      this.items = item;
      console.log("items fetched", this.items)
    });
  }
  useFormattedMoney = (x: any) => {
    if (!x) return 0;
    x = parseFloat(x).toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
}
