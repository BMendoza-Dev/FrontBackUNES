import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorialPageRoutingModule } from './editorial-routing.module';

import { EditorialPage } from './editorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorialPageRoutingModule
  ],
  declarations: [EditorialPage]
})
export class EditorialPageModule {}
