import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroCuentasPipe } from 'src/app/pipes/filtro-cuentas.pipe';
import { FormsPerfilComponent } from './forms-perfil/forms-perfil.component';
@NgModule({
  declarations: [
    NgautoperfilComponent,
    FormsAsamDeleComponent,
    TableAsambleistaComponent,
    FormsDelegadoComponent,
    TableDelegadoComponent,
    FormsAdministradorComponent,
    TableAdministradorComponent,
    FiltroCuentasPipe,
    FormsPerfilComponent
  ],
  imports: [
    NgxSpinnerModule,
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
    PaginationModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CuentaModule { }
