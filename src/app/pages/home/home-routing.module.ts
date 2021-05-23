import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./../mainscreen/mainscreen.module').then(m => m.MainscreenModule),
      },
      {
        path: 'list',
        loadChildren: () => import('./../list/list.module').then(m => m.ListModule),
      },
      {
        path: 'add',
        loadChildren: () => import('./../add/add.module').then(m => m.AddModule),
      },
      {
        path: 'info',
        loadChildren: () => import('./../info/info.module').then(m => m.InfoModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
