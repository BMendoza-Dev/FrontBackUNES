import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsambleistasPage } from './asambleistas.page';

const routes: Routes = [
  {
    path: '',
    component: AsambleistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsambleistasPageRoutingModule {}
