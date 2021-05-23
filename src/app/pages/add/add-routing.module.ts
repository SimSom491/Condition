import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './add.component';

const routes: Routes = [
  {
    path: 'add/:id',
    component: AddComponent,
    data: {title: 'Update - Webkert'}
  },
  {
    path: '',
    component: AddComponent,
    data: {title: 'Hozzáadás - Condition'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {
}
