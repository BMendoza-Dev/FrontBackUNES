import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }

  checkUserLogin(route: ActivatedRouteSnapshot):boolean{
    let sesionLoginInicio:any = localStorage.getItem('sesionLoginInicio');
    debugger
    if(sesionLoginInicio.includes(route.data['permissions' || 'permissions2'])){
      debugger
      return true
    }else{
      console.log('No tiene permisos')
      return false
    }
  }
   
}
