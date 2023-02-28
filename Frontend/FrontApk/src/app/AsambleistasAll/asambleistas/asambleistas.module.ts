import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleistasPageRoutingModule } from './asambleistas-routing.module';

import { AsambleistasPage } from './asambleistas.page';
import { FiltroPipe } from '../../pipes/filtro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleistasPageRoutingModule,
  ],
  declarations: [AsambleistasPage,FiltroPipe]
})
export class AsambleistasPageModule {}
