import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UIService {
  itemId = new Subject<string>();
}
