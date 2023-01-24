import { Component, Input, OnInit } from '@angular/core';

import { navItems, navItemsAdmin, navItemsAsamb } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{

  parentMessage = "message from parent";

  public navItems = navItemsAdmin;
  Rol=localStorage.getItem('rol');
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  

  constructor() {}

  ngOnInit(): void {
    if(this.Rol == "Administrador"){
      this.navItems = navItemsAdmin;
    }else if(this.Rol == "Asambleista"){
      this.navItems = navItemsAsamb;
    }else if (this.Rol == "Delegado"){

    }
    
  }
}
