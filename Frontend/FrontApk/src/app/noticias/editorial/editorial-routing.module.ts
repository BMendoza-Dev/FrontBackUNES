import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorialPage } from './editorial.page';

const routes: Routes = [
  {
    path: '',
    component: EditorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorialPageRoutingModule {}
