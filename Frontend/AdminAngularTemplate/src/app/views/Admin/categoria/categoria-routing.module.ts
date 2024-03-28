import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';
import { AsambLoginGuard } from 'src/app/guards/asamb-login.guard';
import { FormDirectoComponent } from './form-directo/form-directo.component';
import { CombiGuard } from 'src/app/guards/combi.guard';

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
    },
    {
      path: 'form-directo',
      component: FormDirectoComponent,
      canActivate:[CombiGuard],
      data: {
        title: 'Directo'
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
