import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcInicv2PageRoutingModule } from './opc-inicv2-routing.module';

import { OpcInicv2Page } from './opc-inicv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcInicv2PageRoutingModule
  ],
  declarations: [OpcInicv2Page]
})
export class OpcInicv2PageModule {}
