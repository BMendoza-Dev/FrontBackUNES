import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

import { AdminLoginGuard } from './guards/admin-login.guard';
import { AsambLoginGuard } from './guards/asamb-login.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'administrador_nav_1',
        loadChildren: () => import('./views/Admin/cuenta/cuenta.module').then((m) => m.CuentaModule),
        
      },

      {
        path: 'administrador_nav_2',
        loadChildren: () => import('./views/Asambleista/biografia/biografia.module').then((m) => m.BiografiaModule),
        
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'blogs',
        loadChildren: () =>
        import('./views/blogs/blogs.module').then((m) => m.BlogsModule),
        
      },
      {
        path: 'profile',
        loadChildren: () =>
        import('./views/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: 'admin-categoria',
        loadChildren: () =>
        import('./views/Admin/categoria/categoria.module').then((m) => m.CategoriaModule)
      },
      {
        path: 'editorial',
        loadChildren: () =>
        import('./views/Admin/editorial/editorial.module').then((m) => m.EditorialModule)
      },

      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
