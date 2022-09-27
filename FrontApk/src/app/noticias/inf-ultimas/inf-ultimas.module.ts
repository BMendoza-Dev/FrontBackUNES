import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfUltimasPageRoutingModule } from './inf-ultimas-routing.module';

import { InfUltimasPage } from './inf-ultimas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfUltimasPageRoutingModule
  ],
  declarations: [InfUltimasPage]
})
export class InfUltimasPageModule {}
