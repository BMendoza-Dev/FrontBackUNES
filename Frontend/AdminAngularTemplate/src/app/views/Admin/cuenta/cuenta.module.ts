import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgautoperfilComponent } from './ngautoperfil/ngautoperfil.component';
import { CuentaRoutingModule } from './cuenta-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

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
  PaginationModule,
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
} from '@coreui/angular';
import { FormsAsamDeleComponent } from './forms-asam-dele/forms-asam-dele.component';
import { TableAsambleistaComponent } from './table-asambleista/table-asambleista.component';
import { FormsDelegadoComponent } from './forms-delegado/forms-delegado.component';
import { TableDelegadoComponent } from './table-delegado/table-delegado.component';

@NgModule({
  declarations: [
    NgautoperfilComponent,
    FormsAsamDeleComponent,
    TableAsambleistaComponent,
    FormsDelegadoComponent,
    TableDelegadoComponent,
  ],
  imports: [
    CommonModule,
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
    PaginationModule,
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
  ]
})
export class CuentaModule { }
