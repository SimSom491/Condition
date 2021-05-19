import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import {InfoRoutingModule} from './info-routing.module';
import {ConditionCardModule} from '../condition/card/condition-card.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        InfoComponent
    ],
    exports: [
        InfoComponent
    ],
  imports: [
    CommonModule, InfoRoutingModule, ConditionCardModule, ContainerModule, MatToolbarModule, MatButtonModule
  ]
})
export class InfoModule { }
