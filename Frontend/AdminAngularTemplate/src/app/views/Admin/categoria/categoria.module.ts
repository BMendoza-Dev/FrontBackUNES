import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AccordionModule, AlertModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, CarouselModule, CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FormCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
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
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CategoriaModule { }