import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';
import { LastNewsAgreeComponent } from './last-news-agree/last-news-agree.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';
import { AsambLoginGuard } from 'src/app/guards/asamb-login.guard';
import {CombiGuard} from 'src/app/guards/combi.guard'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Blogs'
    },
    children: [
      {
        path: 'form-blogs',
        component: FormBlogsComponent,
        canActivate:[CombiGuard],
        data: {
          title: 'Form Blogs'
        }
      },
      {
        path: 'utlimas-noticias',
        component: LastNewsAgreeComponent,
        canActivate:[AdminLoginGuard],
        data: {
          title: 'Ultimas Noticias'
        }
      },
      {
        path: 'lista-blogs',
        component: ListBlogsComponent,
        canActivate:[CombiGuard],
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
