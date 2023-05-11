import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfEditorialPage } from './inf-editorial.page';

const routes: Routes = [
  {
    path: '',
    component: InfEditorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfEditorialPageRoutingModule {}
