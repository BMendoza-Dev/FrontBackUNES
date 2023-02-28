import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfAsambleistaPage } from './inf-asambleista.page';

const routes: Routes = [
  {
    path: '',
    component: InfAsambleistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfAsambleistaPageRoutingModule {}
