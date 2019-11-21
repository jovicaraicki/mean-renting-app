import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSingleComponent } from './item-single.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ItemsComponent } from '../../items.component';

describe('ItemSingleComponent', () => {
  let component: ItemSingleComponent;
  let fixture: ComponentFixture<ItemSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemSingleComponent,
        ItemsComponent
      ],
      imports: [
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
