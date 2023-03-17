import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsAdministradorComponent } from './forms-administrador/forms-administrador.component';
import { FormsDelegadoComponent } from './forms-delegado/forms-delegado.component';


import {NgautoperfilComponent} from './ngautoperfil/ngautoperfil.component'
import { TablaPracticaComponent } from './tabla-practica/tabla-practica.component';

const routes: Routes = [{
  path: '',
    data: {
      title: 'administrador_nav_1'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'administrador_nav_1'
      },
      {
        path: 'asambleistas',
        component: NgautoperfilComponent,
        data: {
          title: 'Asambleistas'
        }
      },
      {
        path: 'delegados',
        component: FormsDelegadoComponent,
        data: {
          title: 'Delegados'
        }
      },
      {
        path: 'admin',
        component: FormsAdministradorComponent,
        data: {
          title: 'Administrador'
        }
      },
      {
        path: 'pracTable',
        component: TablaPracticaComponent,
        data: {
          title: 'Tabla'
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