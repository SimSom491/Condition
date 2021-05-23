import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ConditionCardModule} from '../condition/card/condition-card.module';
import {ListRoutingModule} from './list-routing.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ConditionCardModule,
    ListRoutingModule,
    ContainerModule,
    MatToolbarModule
  ],
  exports: [ListComponent]
})
export class ListModule {
}
