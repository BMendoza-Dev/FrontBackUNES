import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfBlogsPage } from './inf-blogs.page';

const routes: Routes = [
  {
    path: '',
    component: InfBlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfBlogsPageRoutingModule {}
