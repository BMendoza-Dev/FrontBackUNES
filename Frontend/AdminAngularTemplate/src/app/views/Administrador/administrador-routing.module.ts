import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CuentasComponent} from './cuentas/cuentas.component'
import {NgautoperfilComponent} from './../Admin/cuenta/ngautoperfil/ngautoperfil.component'

const routes: Routes = [{
  path: '',
    data: {
      title: 'Administrador'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'administrador'
      },
      {
        path: 'cuentas',
        component: CuentasComponent,
        data: {
          title: 'Cuentas'
        }
      },
      {
        path: 'ngautoperfil',
        component: NgautoperfilComponent,
        data: {
          title: 'ngautoperfil'
        }
      }

    ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
