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
import { CreatEditorialComponent } from './creat-editorial/creat-editorial.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroCreateEditorial } from 'src/app/pipes/filtro-createEditorial.pipe';
import { FiltroCreateEditorialCategoria } from 'src/app/pipes/filtro-createEditorialCategoria.pipe';
import { FiltroEditorailPipe } from 'src/app/pipes/filtro-editorial.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
@NgModule({
  declarations: [
    ListEditorialComponent,
    CreatEditorialComponent,
    FiltroCreateEditorial,
    FiltroCreateEditorialCategoria,
    FiltroEditorailPipe
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
    FormsModule,
    PaginationModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    DragDropModule,
    MatStepperModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    CdkAccordionModule,
    AutocompleteLibModule
  ]
})
export class EditorialModule { }
