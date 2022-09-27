import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimasPageRoutingModule } from './ultimas-routing.module';

import { UltimasPage } from './ultimas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimasPageRoutingModule
  ],
  declarations: [UltimasPage]
})
export class UltimasPageModule {}
