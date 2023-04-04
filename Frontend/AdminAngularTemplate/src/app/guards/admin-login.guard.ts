import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {
  constructor(private rutas:Router){}
  canActivate(){
    
    let inicio = localStorage.getItem('sesionLoginInicio');
    
    if(!inicio){
      this.rutas.navigate(["/login"]);
      return false;
      
    }else if(inicio != "super_administrador"){
      
      return false;
    }
    return true;
  }
  
}
