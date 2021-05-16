import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainscreenComponent } from './mainscreen.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
    declarations: [
        MainscreenComponent
    ],
    exports: [
        MainscreenComponent
    ],
    imports: [
        CommonModule, MatCardModule, MatRippleModule
    ]
})
export class MainscreenModule { }
