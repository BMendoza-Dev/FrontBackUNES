import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menuController:MenuController, private router:Router) { }

  ngOnInit() {
  }

  abrirMenu() {
    this.menuController.open();
  }

  navigateToInicioV2(){
    this.router.navigate(['../opc-inicv2']);
  }

}
