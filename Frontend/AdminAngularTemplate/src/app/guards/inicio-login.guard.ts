import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioLoginGuard implements CanActivate {

  constructor(private rutas:Router){}
  canActivate(){
    let inicio = localStorage.getItem('sesionLoginInicio');

    if(!inicio){
      this.rutas.navigate(["/login"]);
      debugger
      return false;
    }else{
      debugger
      return true;
    }
    
  }
  
}
