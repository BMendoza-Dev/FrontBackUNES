import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { SelectCategoriaComponent } from './select-categoria/select-categoria.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Blogs'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blogs'
      },
      {
        path: 'form-blogs',
        component: FormBlogsComponent,
        data: {
          title: 'Form Blogs'
        }
      },
      {
        path: 'list-blogs',
        component: ListBlogsComponent,
        data: {
          title: 'List Blogs'
        }
      },
      {
        path: 'utlimas-noticias',
        component: SelectCategoriaComponent,
        data: {
          title: 'Ultimas Noticias'
        }
      },
      {
        path: 'lista-blogs',
        component: SelectCategoriaComponent,
        data: {
          title: 'Lista de Blogs'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
