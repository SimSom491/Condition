import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {Condition} from '../../shared/models/condition.model';


@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {
  @Input() categories?: Category[];
  @Output() callSelectPage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
