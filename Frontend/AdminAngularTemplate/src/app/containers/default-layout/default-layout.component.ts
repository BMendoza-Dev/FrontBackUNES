import { Component, Input, OnInit } from '@angular/core';

import { navItems, navItemsAdmin, navItemsAsamb } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{

  parentMessage = "message from parent";

  public navItems:any;
  Rol=localStorage.getItem('sesionLoginInicio');
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  

  constructor() {}

  ngOnInit(): void {
    debugger
    if(this.Rol == "1"){
      debugger
      this.navItems = navItemsAdmin;
    }else if(this.Rol == "2"){
      debugger
      this.navItems = navItemsAsamb;
    }else if (this.Rol == "3"){

    }
    
  }
}
