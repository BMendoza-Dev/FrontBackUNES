import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvivoPage } from './envivo.page';

const routes: Routes = [
  {
    path: '',
    component: EnvivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvivoPageRoutingModule {}
