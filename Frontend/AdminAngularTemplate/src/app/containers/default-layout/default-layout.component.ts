import { Component, Input, OnInit } from '@angular/core';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';

import { navItem } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  parentMessage = "message from parent";
  public navItems: any;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };



  constructor(private authService: LocalProyectService) {
    this.getFilterNacItems();

  }

  getFilterNacItems() {
    this.navItems = navItem.filter((item: any) =>
      item.permission.some((p: any) => p === localStorage.getItem('sesionLoginInicio')))
      .map(item => {
        if (item.children) {
          return {
            ...item,
            children: item.children.filter((child: any) => child.permission.some((p: any) => p === localStorage.getItem('sesionLoginInicio')))
          };
        }
        return item;
      })
      .filter((item: any) => item.permission.some((p: any) => p === localStorage.getItem('sesionLoginInicio')));
  }



  ngOnInit(): void {

  }
}
