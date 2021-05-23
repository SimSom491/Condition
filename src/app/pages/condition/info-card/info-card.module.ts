import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoCardComponent} from './info-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [InfoCardComponent]
})
export class InfoCardModule {
}
