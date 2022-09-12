import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbitoterritorialPageRoutingModule } from './ambitoterritorial-routing.module';

import { AmbitoterritorialPage } from './ambitoterritorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbitoterritorialPageRoutingModule
  ],
  declarations: [AmbitoterritorialPage]
})
export class AmbitoterritorialPageModule {}
