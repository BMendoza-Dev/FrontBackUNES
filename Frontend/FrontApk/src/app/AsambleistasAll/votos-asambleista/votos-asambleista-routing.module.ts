import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotosAsambleistaPage } from './votos-asambleista.page';

const routes: Routes = [
  {
    path: '',
    component: VotosAsambleistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotosAsambleistaPageRoutingModule {}
