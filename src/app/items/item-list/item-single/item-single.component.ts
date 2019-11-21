import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;

  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

  onPassID(id: string) {
    // console.log('ID: ', id);
    this.uiService.itemId.next(id);
  }

}
