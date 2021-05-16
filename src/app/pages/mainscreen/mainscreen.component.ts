import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';


@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {
  @Input() categories?: Category[];
  constructor() { }

  ngOnInit(): void {
  }

}
