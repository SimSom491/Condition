import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ConditionCardModule} from '../condition/card/condition-card.module';
import {MainscreenModule} from '../mainscreen/mainscreen.module';
import {InfoModule} from '../info/info.module';
import {AddModule} from '../add/add.module';
import {NavModule} from '../nav/nav.module';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConditionCardModule,
    MainscreenModule,
    InfoModule,
    AddModule,
    NavModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
