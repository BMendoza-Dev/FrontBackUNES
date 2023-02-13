import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsBiografiaComponent } from './forms-biografia/forms-biografia.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'administrador_nav_2'
    },
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'administrador_nav_2'
      },
      {
        path: 'biografia',
        component: FormsBiografiaComponent,
        data: {
        title: 'Biografia'
        } 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiografiaRoutingModule { }
