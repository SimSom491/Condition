import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Condition} from '../../../shared/models/condition.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit, OnChanges {
  @Input() condition?: Condition;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Sikeres betöltés');
  }


}
