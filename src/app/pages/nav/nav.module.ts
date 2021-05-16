import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule, MatToolbarModule,
      MatButtonModule, MatIconModule
    ]
})
export class NavModule { }
