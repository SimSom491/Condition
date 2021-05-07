import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {ConditionCardModule} from '../condition/card/condition-card.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ConditionCardModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
