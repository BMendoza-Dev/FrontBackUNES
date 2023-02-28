import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { AsambleistasPageModule } from '../AsambleistasAll/asambleistas/asambleistas.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    AsambleistasPageModule

  ],
  declarations: [InicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}
