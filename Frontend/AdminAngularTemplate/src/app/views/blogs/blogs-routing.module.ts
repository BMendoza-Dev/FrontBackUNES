import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
