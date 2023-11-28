import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsDignidadComponent} from './forms-dignidad/forms-dignidad.component';
import {AdminLoginGuard} from './../../../guards/admin-login.guard'
const routes: Routes = [{
  path: '',
  data: {
    title: 'Dignidad Política'
  },
  children: [
    {
      path: 'forms-dignidad',
      component: FormsDignidadComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Dignidad Política'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DignidadPoliticaRoutingModule { }
