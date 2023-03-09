import { Component, OnInit } from '@angular/core';
import * as scriptjs from 'scriptjs';
@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.page.html',
  styleUrls: ['./ultimas.page.scss'],
})
export class UltimasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
    //scriptjs('https://platform.twitter.com/widgets.js', (dato:any) => {
      // Aquí puedes ejecutar cualquier código que dependa del script cargado
      //dato; 
    //});
  }

}
