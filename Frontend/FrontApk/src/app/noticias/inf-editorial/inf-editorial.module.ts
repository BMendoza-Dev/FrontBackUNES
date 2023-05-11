import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfEditorialPageRoutingModule } from './inf-editorial-routing.module';

import { InfEditorialPage } from './inf-editorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfEditorialPageRoutingModule
  ],
  declarations: [InfEditorialPage]
})
export class InfEditorialPageModule {}
