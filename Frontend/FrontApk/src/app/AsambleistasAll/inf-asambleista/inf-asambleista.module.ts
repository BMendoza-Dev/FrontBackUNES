import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfAsambleistaPageRoutingModule } from './inf-asambleista-routing.module';

import { InfAsambleistaPage } from './inf-asambleista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfAsambleistaPageRoutingModule
  ],
  declarations: [InfAsambleistaPage]
})
export class InfAsambleistaPageModule {}
