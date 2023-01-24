import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {
  constructor(private rutas:Router){}
  canActivate(){
    let inicio = localStorage.getItem('sesionLoginInicio');
    let rol = localStorage.getItem('rol');

    if(!inicio){
      this.rutas.navigate(["/login"]);
      return false;
    }else if(rol != "Administrador"){
      return false;
    }
    return true;
  }
  
}
