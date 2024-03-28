import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcInicv2Page } from './opc-inicv2.page';

const routes: Routes = [
  {
    path: '',
    component: OpcInicv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcInicv2PageRoutingModule {}
