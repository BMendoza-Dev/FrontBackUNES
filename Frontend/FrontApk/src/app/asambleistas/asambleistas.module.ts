import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleistasPageRoutingModule } from './asambleistas-routing.module';

import { AsambleistasPage } from './asambleistas.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleistasPageRoutingModule,
    PipesModule
  ],
  declarations: [AsambleistasPage]
})
export class AsambleistasPageModule {}
