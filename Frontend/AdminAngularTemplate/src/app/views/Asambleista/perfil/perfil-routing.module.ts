import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PersonalComponent} from './personal/personal.component'

const routes: Routes = [{
  path: '',
    data: {
      title: 'Asambleistas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'asambleista'
      },
      {
        path: 'personalPerfile',
        component: PersonalComponent,
        data: {
          title: 'Perfil Personal'
        }
      }

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
