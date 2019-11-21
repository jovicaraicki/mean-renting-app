import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ItemsComponent } from './items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemSingleComponent } from './item-list/item-single/item-single.component';
import { ItemsService } from './items.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { NumberDirective } from './number.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemSingleComponent,
    ItemDetailComponent,
    ItemCreateComponent,
    NumberDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6kRfLsf9HpL1OtgutuAHYrxeifhpFxzw',
      libraries: ['geometry']
    }),
    AgmOverlays,
    AgmSnazzyInfoWindowModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ItemsService]
})
export class ItemsModule {}
