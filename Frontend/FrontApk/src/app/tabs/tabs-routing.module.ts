import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asambleistas',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'asambleistas',
        loadChildren: () => import('./../AsambleistasAll/asambleistas/asambleistas.module').then(m => m.AsambleistasPageModule)
      },
      {
        path: 'ambitoTerritorial',
        loadChildren: () => import('../AsambleistasAll/ambitoterritorial/ambitoterritorial.module').then(m => m.AmbitoterritorialPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
