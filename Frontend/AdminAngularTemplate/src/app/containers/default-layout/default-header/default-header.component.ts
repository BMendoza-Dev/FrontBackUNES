import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {HeaderComponent } from '@coreui/angular';
import Echo from 'laravel-echo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LoginService } from 'src/app/servicios/login.service';
import { navItem } from './../_nav';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  @Input() childMessage: string;
  texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, augue eu convallis eleifend, massa ex bibendum dolor, eget iaculis justo velit sit amet quam.';

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  echo: Echo; total: number = 0;
  public navItems = navItem;

  rotateAnimation = false;
  notifiData: any[] = [
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset dasd sdas das dasdas dasda sd dasda dasdasd asd ', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
    {'blogtitulo':'Lorem Ipsum is simply dummy text of the printing and typeset', 'date':'revisar blog', 'perfil':'Luisa Gonzales','user':'Guido Mendoza'},
  ];

  toggleAnimation() {
    this.rotateAnimation = !this.rotateAnimation;
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(public rutas: Router, private service: LoginService, private administradorService: AdministradorService, private sanitizer: DomSanitizer) {
    super();
    this.echo = this.service.getSockets();
    let rol = localStorage.getItem('sesionLoginInicio'); let id = localStorage.getItem('idUser');
    this.echo.channel('channel-NotifyBlosAdmin.' + rol + '.' + id)
      .listen('NotifyEventBlog', (resp: any) => {
        
        this.toggleAnimation();
        this.total = resp['blog'].length;
        this.notifiData = resp['blog'];
        setTimeout(() => {
          this.toggleAnimation();
          console.log('La función se ha ejecutado después de 3 segundos');
        }, 3000);
      });
  }


  ngOnInit(): void {
    this.notifiData; 
    this.mostrarImg();
  }

  contrador:number = 10;
  onScroll() {
    // cargar más elementos
    this.contrador = this.contrador + 10;
    this.tableSize = this.contrador;
    
    debugger
  }

  ngOnDestroy() {
    this.echo.leaveAllChannels();
    localStorage.clear();
  }

  salir() {
    this.rutas.navigate(['/login']);
  }

  thumbnail: any;
  mostrarImg() {
    let id: any = localStorage.getItem('idAsambPerf');
    this.administradorService.getImg(id).subscribe((baseImage: any) => {
      //alert(JSON.stringify(data.image));

      let objectURL = 'data:image/jpeg;base64,' + baseImage[0].imagen;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }, error => { console.log(error) });
  }
}
