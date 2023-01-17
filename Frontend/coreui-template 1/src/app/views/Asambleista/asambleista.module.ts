import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsambleistaRoutingModule } from './asambleista-routing.module';
import { CuentasAsambleistaComponent } from './cuentas-asambleista/cuentas-asambleista.component';


@NgModule({
  declarations: [
    CuentasAsambleistaComponent
  ],
  imports: [
    CommonModule,
    AsambleistaRoutingModule
  ]
})
export class AsambleistaModule { }
