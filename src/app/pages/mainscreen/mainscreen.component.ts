import {Component} from '@angular/core';

import {CATEGORIES} from '../../shared/databases/category.database';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent {
  categories = CATEGORIES;

  constructor() {
  }
}
