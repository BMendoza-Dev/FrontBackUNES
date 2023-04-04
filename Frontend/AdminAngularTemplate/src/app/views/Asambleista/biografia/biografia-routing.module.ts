import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsBiografiaComponent } from './forms-biografia/forms-biografia.component';
import { AsambLoginGuard } from 'src/app/guards/asamb-login.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'administrador_nav_2'
    },
    children: [
      {
        path: 'biografia',
        component: FormsBiografiaComponent,
        canActivate:[AsambLoginGuard],
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
