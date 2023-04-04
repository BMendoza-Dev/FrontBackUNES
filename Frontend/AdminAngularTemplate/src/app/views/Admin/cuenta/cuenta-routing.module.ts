import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsAdministradorComponent } from './forms-administrador/forms-administrador.component';
import { FormsDelegadoComponent } from './forms-delegado/forms-delegado.component';
import { NgautoperfilComponent } from './ngautoperfil/ngautoperfil.component'
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';

const routes: Routes = [{
  path: '',
  data: {
    title: 'administrador_nav_1'
  },
  children: [
    {
      path: 'asambleistas',
      component: NgautoperfilComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Asambleistas'
      }
    },
    {
      path: 'delegados',
      component: FormsDelegadoComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Delegados'
      }
    },
    {
      path: 'admin',
      component: FormsAdministradorComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Administrador'
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