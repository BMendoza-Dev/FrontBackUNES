import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AsistLoginGuard implements CanActivate {
  constructor(private rutas: Router) { }
  canActivate():boolean {
    
    let inicio = localStorage.getItem('sesionLoginInicio');

    if (!inicio) {
      this.rutas.navigate(["/login"]);
      return false;
    } else if (inicio != "asistente") {
      return false;
    }
    return true;
  }

}
