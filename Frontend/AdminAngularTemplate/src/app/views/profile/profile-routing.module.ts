import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigProfileComponent } from './config-profile/config-profile.component';
const routes: Routes = [
  {
    path: '',
      data: {
        title: 'profile'
      },
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'profile'
        },
        {
          path: 'config',
        component: ConfigProfileComponent,
        data: {
          title: 'Asambleistas'
        }
        }
  
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
