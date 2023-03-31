import { Component, Input, OnInit } from '@angular/core';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';

import { navItem } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  parentMessage = "message from parent";
  navItemCopy:any;
  public navItems: any;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };



  constructor(private authService: LocalProyectService) { 
    this.navItemCopy = [...navItem];  debugger
    this.navItems = this.getFilteredNavItems();
    
  }

  getFilteredNavItems(): any[] {
    
    const userRole:any = localStorage.getItem('sesionLoginInicio'); 
    // replace with actual user role
    return this.navItemCopy
      .filter((item:any) => this.authService.hasPermission(item.url, userRole))
      .map((item:any) => {
        if (item.children) {
          item.children = item.children.filter((child:any) =>
            this.authService.hasPermission(
              child.url,
              userRole
            )
          );
        }
        return item;
      });
  }

  ngOnInit(): void {
    
    //this.navItems = this.getFilteredNavItems();
    
    /*let NavItem: any = []; let i = 0
    navItem.forEach((element: any) => {
      
      if(element.children){
        let dato: any = element.children;
        
        for (let index = 0; index < dato.length; index++) {
          if(dato.length > 0){
            dato.forEach((element:any) => {
              
            });

          }
          if (sesionLoginInicio.includes(dato[index].permissions)) {
            
          }
        }
        
      }
      if (element.permissions) {
        
        let dato: any = element.permissions;
        for (let index = 0; index < dato.length; index++) {
          if (sesionLoginInicio.includes(dato[index])) {
            NavItem[i] = element;
            i++;
          }
        }
      }
    });

    this.navItems = NavItem;
*/
  }
}
