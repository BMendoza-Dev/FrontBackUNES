import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotosAsambleistaPageRoutingModule } from './votos-asambleista-routing.module';

import { VotosAsambleistaPage } from './votos-asambleista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotosAsambleistaPageRoutingModule
  ],
  declarations: [VotosAsambleistaPage]
})
export class VotosAsambleistaPageModule {}
