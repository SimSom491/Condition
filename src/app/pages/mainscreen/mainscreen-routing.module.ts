import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainscreenComponent} from './mainscreen.component';

const routes: Routes = [
  {
    path: '',
    component: MainscreenComponent,
    data: {title: 'Főoldal - Condition'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainscreenRoutingModule {
}
