import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiografiaPageRoutingModule } from './biografia-routing.module';

import { BiografiaPage } from './biografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiografiaPageRoutingModule
  ],
  declarations: [BiografiaPage]
})
export class BiografiaPageModule {}
