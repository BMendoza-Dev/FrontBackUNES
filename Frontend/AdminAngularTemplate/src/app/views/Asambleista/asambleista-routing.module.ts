import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
    data:{
      title: 'Asambleista'
    },
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'asambleista'
      },
      /*{
        path: 'cuentas-asambleista',
        component: CuentasAsambleistaComponent,
        data: {
          title: 'Cuentas'
        }
      }*/
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsambleistaRoutingModule { }
