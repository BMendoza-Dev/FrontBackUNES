import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsambLoginGuard implements CanActivate {
  constructor(private rutas:Router){}
  canActivate(){
    let inicio = localStorage.getItem('sesionLoginInicio');
    let rol = localStorage.getItem('rol');

    if(!inicio){
      this.rutas.navigate(["/login"]);
      return false;
    }else if(rol != "Asambleista"){
      return false;
    }
    return true;
  }
  
}
