import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import Echo from 'laravel-echo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  @Input() childMessage: string;
  texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, augue eu convallis eleifend, massa ex bibendum dolor, eget iaculis justo velit sit amet quam.';

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  echo: Echo;

  constructor(public rutas: Router,private service:LoginService,private classToggler: ClassToggleService, private administradorService: AdministradorService, private sanitizer: DomSanitizer) {
    super();
    this.echo = this.service.getSockets();
  }

 
  ngOnInit(): void {
    let rol = localStorage.getItem('sesionLoginInicio'); let id = localStorage.getItem('idUser');
   this.echo.channel('channel-NotifyBlosAdmin.'+rol+'.'+id)
        .listen('NotifyEventBlog', (resp:any) => {
          console.log(resp)
        });
    this.mostrarImg();
  }

  listNotifi(){

  }

  ngOnDestroy(){
    this.echo.leaveAllChannels();
    localStorage.clear();
  }

  salir() {
    this.rutas.navigate(['/login']);
  }

  thumbnail: any;
  mostrarImg() {
    let id:any = localStorage.getItem('idAsambPerf');
    this.administradorService.getImg(id).subscribe((baseImage: any) => {
      //alert(JSON.stringify(data.image));
      
      let objectURL = 'data:image/jpeg;base64,' + baseImage[0].imagen;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    },error =>{console.log(error)});
  }
}
