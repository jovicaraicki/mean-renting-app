import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../auth/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from '../items/items.component';
import { ItemCreateComponent } from '../items/item-create/item-create.component';
import { ItemDetailComponent } from '../items/item-detail/item-detail.component';
import { ItemListComponent } from '../items/item-list/item-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ItemsComponent,
        ItemCreateComponent,
        ItemDetailComponent,
        ItemListComponent
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        NgbModule
      ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
