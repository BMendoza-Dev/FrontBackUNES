import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { ListEditorialComponent } from './list-editorial/list-editorial.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    ListEditorialComponent
  ],
  imports: [
    CommonModule,
    EditorialRoutingModule,
    CommonModule,
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
    IconModule,
    SpinnerModule,
    HttpClientModule,
    FormModule,
    PaginationModule,
    ReactiveFormsModule 
  ]
})
export class EditorialModule { }
