import { Component, Input, OnInit } from '@angular/core';

import { navItem } from './_nav';

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
    let sesionLoginInicio:any = localStorage.getItem('sesionLoginInicio');
    
    let NavItem:any=[]; let i=0
    navItem.forEach((element:any) => {
      
      if(element.permissions){
        let dato:any = element.permissions;
      for (let index = 0; index < dato.length; index++) {
        if (sesionLoginInicio.includes(dato[index])){
          NavItem[i] = element;
          i++;
          
        }
      }
      }
    });
    
    this.navItems = NavItem;
    
  }
}
