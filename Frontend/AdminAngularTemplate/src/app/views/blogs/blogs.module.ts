import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { FormBlogsComponent } from './form-blogs/form-blogs.component';
import { HttpClientModule } from '@angular/common/http';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CarouselModule,
  CollapseModule,
  NavModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  AlertModule,
  ModalModule,
  ToastModule,
  PaginationModule,
} from '@coreui/angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { IconModule } from '@coreui/icons-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroBlogsPipe } from 'src/app/pipes/filtro-blogs.pipe';
import { LastNewsAgreeComponent } from './last-news-agree/last-news-agree.component';
@NgModule({
  declarations: [
    FormBlogsComponent,
    ListBlogsComponent,
    LastNewsAgreeComponent,
    FiltroBlogsPipe
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    CarouselModule,
    CollapseModule,
    NavModule,
    PlaceholderModule,
    PopoverModule,
    ProgressModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    AlertModule,
    ModalModule,
    ToastModule,
    PaginationModule,
    CKEditorModule,
    IconModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule 
  ]
})
export class BlogsModule { }
