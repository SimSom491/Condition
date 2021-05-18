import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Condition} from '../../../shared/models/condition.model';

@Component({
  selector: 'app-condition-card',
  templateUrl: './condition-card.component.html',
  styleUrls: ['./condition-card.component.scss']
})
export class ConditionCardComponent implements OnInit {
  @Input() condition?: Condition;
  @Output() getCondition = new EventEmitter<Condition>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
