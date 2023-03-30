import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';
import { LastNewsAgreeComponent } from './last-news-agree/last-news-agree.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';

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
        path: 'utlimas-noticias',
        component: LastNewsAgreeComponent,
        data: {
          title: 'Ultimas Noticias'
        }
      },
      {
        path: 'lista-blogs',
        component: ListBlogsComponent,
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
