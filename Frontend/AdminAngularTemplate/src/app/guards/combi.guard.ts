import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginGuard } from './admin-login.guard';
import { AsambLoginGuard } from './asamb-login.guard';

@Injectable({
    providedIn: 'root'
})

export class CombiGuard implements CanActivate {
    constructor(private adminLoginGuardard1: AdminLoginGuard, private asambLoginGuard: AsambLoginGuard,private rutas:Router){}
    canActivate(): boolean {
        const canActivateGuardAdmin = this.adminLoginGuardard1.canActivate();
    const canActivateGuardAssam = this.asambLoginGuard.canActivate();

    if (canActivateGuardAdmin || canActivateGuardAssam) {
        return true;
      }
      return false;
    }
}
