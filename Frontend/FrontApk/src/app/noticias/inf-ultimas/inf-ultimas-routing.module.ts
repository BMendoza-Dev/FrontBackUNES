import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfUltimasPage } from './inf-ultimas.page';

const routes: Routes = [
  {
    path: '',
    component: InfUltimasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfUltimasPageRoutingModule {}
