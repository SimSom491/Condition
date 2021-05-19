import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainscreenComponent } from './mainscreen.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MainscreenRoutingModule} from './mainscreen-routing.module';
import {ContainerModule} from '../../shared/components/container/container.module';



@NgModule({
    declarations: [
        MainscreenComponent
    ],
    exports: [
        MainscreenComponent
    ],
  imports: [
    CommonModule, MatCardModule, MatRippleModule, MainscreenRoutingModule, ContainerModule
  ]
})
export class MainscreenModule { }
