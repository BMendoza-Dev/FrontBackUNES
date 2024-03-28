import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.scss']
})
export class Page500Component {

  constructor(public rutas: Router) { }

  iniciarSesion(){
    this.rutas.navigate(['/login']);
  }
}
