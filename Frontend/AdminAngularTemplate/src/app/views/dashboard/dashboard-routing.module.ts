import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { InicioLoginGuard } from 'src/app/guards/inicio-login.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[InicioLoginGuard],
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
