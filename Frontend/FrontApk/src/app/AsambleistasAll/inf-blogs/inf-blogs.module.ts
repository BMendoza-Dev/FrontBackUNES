import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfBlogsPageRoutingModule } from './inf-blogs-routing.module';

import { InfBlogsPage } from './inf-blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfBlogsPageRoutingModule
  ],
  declarations: [InfBlogsPage]
})
export class InfBlogsPageModule {}
