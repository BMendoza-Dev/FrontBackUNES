import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbitoterritorialPage } from './ambitoterritorial.page';

const routes: Routes = [
  {
    path: '',
    component: AmbitoterritorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbitoterritorialPageRoutingModule {}
