import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfUltimasPageRoutingModule } from './inf-ultimas-routing.module';

import { InfUltimasPage } from './inf-ultimas.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfUltimasPageRoutingModule
  ],
  declarations: [InfUltimasPage],
  providers:[DatePipe]
})
export class InfUltimasPageModule {}
