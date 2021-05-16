import { Component, OnInit } from '@angular/core';
import {CONDITIONS} from '../../shared/databases/condition.database';
import {CATEGORIES} from '../../shared/databases/category.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cateories = CATEGORIES;
  constructor() { }
  page = '';
  conditions = CONDITIONS;
  ngOnInit(): void {
    this.page = '';
  }

}
