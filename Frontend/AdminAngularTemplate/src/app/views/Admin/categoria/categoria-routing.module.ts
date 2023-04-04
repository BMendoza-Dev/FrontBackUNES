import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';
import { AsambLoginGuard } from 'src/app/guards/asamb-login.guard';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Categorias'
  },
  children: [
    {
      path: 'form-categoria',
      component: FormCategoriaComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Categorías'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
