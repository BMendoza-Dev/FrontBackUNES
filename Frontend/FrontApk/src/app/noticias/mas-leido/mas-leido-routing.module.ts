import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasLeidoPage } from './mas-leido.page';

const routes: Routes = [
  {
    path: '',
    component: MasLeidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasLeidoPageRoutingModule {}
