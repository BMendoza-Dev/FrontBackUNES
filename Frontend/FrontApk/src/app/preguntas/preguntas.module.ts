import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasPageRoutingModule } from './preguntas-routing.module';

import { PreguntasPage } from './preguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreguntasPage]
})
export class PreguntasPageModule {}
