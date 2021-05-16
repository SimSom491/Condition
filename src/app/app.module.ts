import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './pages/list/list.component';
import {ListModule} from './pages/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {ConditionCardModule} from './pages/condition/card/condition-card.module';
import {HomeModule} from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    BrowserAnimationsModule,
    MatCardModule,
    ConditionCardModule,
    HomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
