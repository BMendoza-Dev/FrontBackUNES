import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombiGuard } from 'src/app/guards/combi.guard';
import { ListEditorialComponent } from './list-editorial/list-editorial.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Editorial'
  },
  children: [
    {
      path: 'editorial-list',
      component: ListEditorialComponent,
      canActivate: [AdminLoginGuard],
      data: {
        title: 'Editorial lista'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
