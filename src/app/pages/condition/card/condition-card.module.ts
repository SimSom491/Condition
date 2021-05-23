import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConditionCardComponent} from './condition-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ConditionCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ConditionCardComponent]
})
export class ConditionCardModule {
}
