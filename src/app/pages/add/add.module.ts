import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AddRoutingModule} from './add-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ContainerModule} from '../../shared/components/container/container.module';



@NgModule({
    declarations: [
        AddComponent
    ],
    exports: [
        AddComponent
    ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule,
    MatNativeDateModule, AddRoutingModule, MatToolbarModule, ContainerModule
  ]
})
export class AddModule { }
