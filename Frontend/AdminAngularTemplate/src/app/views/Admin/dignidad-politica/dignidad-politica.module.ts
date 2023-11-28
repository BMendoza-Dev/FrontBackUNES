import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DignidadPoliticaRoutingModule } from './dignidad-politica-routing.module';
import { FormsDignidadComponent } from './forms-dignidad/forms-dignidad.component';


@NgModule({
  declarations: [
    FormsDignidadComponent
  ],
  imports: [
    CommonModule,
    DignidadPoliticaRoutingModule
  ]
})
export class DignidadPoliticaModule { }
