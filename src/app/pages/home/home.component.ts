import { Component, OnInit } from '@angular/core';
import {CONDITIONS} from '../../shared/databases/condition.database';
import {CATEGORIES} from '../../shared/databases/category.database';
import {Condition} from '../../shared/models/condition.model';
import {FbBaseService} from '../../services/fb-base.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cateories = CATEGORIES;
  constructor(private service: FbBaseService) { }
  page = '';
  conditions?: Observable<Condition[]>;
  conditionInfo?: Condition;
  ngOnInit(): void {
    this.page = '';
    this.gerConditions();
  }
  // tslint:disable-next-line:typedef
  gerConditions(){
    this.conditions = this.service.get('conditions');
  }
  onSelect(event: string): void {
      this.page = event;
  }
  goToInfo(event: Condition): void{
    this.conditionInfo = event;
    this.page = 'info';
  }

}
