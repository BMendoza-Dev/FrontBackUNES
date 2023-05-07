import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasLeidoPageRoutingModule } from './mas-leido-routing.module';

import { MasLeidoPage } from './mas-leido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasLeidoPageRoutingModule
  ],
  declarations: [MasLeidoPage]
})
export class MasLeidoPageModule {}
