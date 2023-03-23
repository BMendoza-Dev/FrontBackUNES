import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Categorias'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'admin-categoria'
    },
    {
      path: 'form-categoria',
      component: FormCategoriaComponent,
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
