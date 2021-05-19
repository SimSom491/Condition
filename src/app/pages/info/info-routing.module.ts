import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info.component';

const routes: Routes = [
    {
        path: 'info/:id',
        component: InfoComponent,
        data: { title: 'Info - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoRoutingModule { }
