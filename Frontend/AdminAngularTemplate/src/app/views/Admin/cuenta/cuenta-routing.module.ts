import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {NgautoperfilComponent} from './ngautoperfil/ngautoperfil.component'

const routes: Routes = [{
  path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Admin'
      },
      {
        path: 'Cuentas',
        component: NgautoperfilComponent,
        data: {
          title: 'Cuentas'
        }
      }

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }