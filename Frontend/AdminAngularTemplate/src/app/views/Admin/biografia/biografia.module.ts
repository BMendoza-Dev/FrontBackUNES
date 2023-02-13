import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiografiaRoutingModule } from './biografia-routing.module';
import { FormsBiografiaComponent } from './forms-biografia/forms-biografia.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FormsBiografiaComponent
  ],
  imports: [
    CommonModule,
    BiografiaRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BiografiaModule { }
