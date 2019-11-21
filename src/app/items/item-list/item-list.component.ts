import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../items.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  itemSubscription: Subscription;
  query;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemSubscription = this.itemsService.getItems().subscribe(itemData => {
      this.items = itemData;
      itemData.filter(item => {
      });
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

}
