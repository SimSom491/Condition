import {Component, OnDestroy, OnInit} from '@angular/core';
import {CONDITIONS} from '../../shared/databases/condition.database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  conditions = CONDITIONS;
  oldal ?= '';
  constructor() { }

  ngOnInit(): void {
    this.oldal = 'list';
  }

  ngOnDestroy(): void {
    delete this.oldal;
  }

}
