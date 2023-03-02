import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiografiaPage } from './biografia.page';

const routes: Routes = [
  {
    path: '',
    component: BiografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiografiaPageRoutingModule {}
