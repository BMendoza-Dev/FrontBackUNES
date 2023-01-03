import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimasPage } from './ultimas.page';

const routes: Routes = [
  {
    path: '',
    component: UltimasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimasPageRoutingModule {}
