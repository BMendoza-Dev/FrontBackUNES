import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('../app/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'asambleistas',
    loadChildren: () => import('./AsambleistasAll/asambleistas/asambleistas.module').then( m => m.AsambleistasPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'ambitoterritorial',
    loadChildren: () => import('./AsambleistasAll/ambitoterritorial/ambitoterritorial.module').then( m => m.AmbitoterritorialPageModule)
  },
  {
    path: 'ultimas',
    loadChildren: () => import('./noticias/ultimas/ultimas.module').then( m => m.UltimasPageModule)
  },
  {
    path: 'inf-ultimas',
    loadChildren: () => import('./noticias/inf-ultimas/inf-ultimas.module').then( m => m.InfUltimasPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./menu/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./menu/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'inf-asambleista/:id',
    loadChildren: () => import('./AsambleistasAll/inf-asambleista/inf-asambleista.module').then( m => m.InfAsambleistaPageModule)
  },
  {
    path: 'biografia/:id',
    loadChildren: () => import('./AsambleistasAll/biografia/biografia.module').then( m => m.BiografiaPageModule)
  },
  {
    path: 'votos-asambleista/:id',
    loadChildren: () => import('./AsambleistasAll/votos-asambleista/votos-asambleista.module').then( m => m.VotosAsambleistaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
