import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgautoperfilComponent } from './ngautoperfil/ngautoperfil.component';
import { CuentaRoutingModule } from './cuenta-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';


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
import { FormsAsamDeleComponent } from './forms-asam-dele/forms-asam-dele.component';
import { TableAsambleistaComponent } from './table-asambleista/table-asambleista.component';
import { FormsDelegadoComponent } from './forms-delegado/forms-delegado.component';
import { TableDelegadoComponent } from './table-delegado/table-delegado.component';
import { FormsAdministradorComponent } from './forms-administrador/forms-administrador.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableAdministradorComponent } from './table-administrador/table-administrador.component';



@NgModule({
  declarations: [
    NgautoperfilComponent,
    FormsAsamDeleComponent,
    TableAsambleistaComponent,
    FormsDelegadoComponent,
    TableDelegadoComponent,
    FormsAdministradorComponent,
    TableAdministradorComponent
  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
    CuentaRoutingModule,
    FormsModule,
    DocsComponentsModule,
    IconModule,
    AutocompleteLibModule,
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
    PaginationModule
  ]
})
export class CuentaModule { }
