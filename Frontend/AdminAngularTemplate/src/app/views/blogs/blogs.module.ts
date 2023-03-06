import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';


@NgModule({
  declarations: [
    FormBlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
