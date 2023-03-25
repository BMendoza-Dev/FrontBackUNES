import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  echo: Echo;

  constructor(private service:LoginService,private classToggler: ClassToggleService, private administradorService: AdministradorService, private sanitizer: DomSanitizer) {
    super();
    //this.echo = this.service.getSockets();
  }

  ngOnInit(): void {
    /*console.log("Implement 1");
    this.echo.channel('channel-NotifyBlosAdmin.admin')
        .listen('NotifyEventBlog', (resp:any) => {
          console.log(resp)
        });
    this.mostrarImg();*/
  }

  listNotifi(){

  }

  salir() {
    localStorage.removeItem('sesionLogin');
    localStorage.removeItem('rol');
    localStorage.removeItem('color');
    localStorage.removeItem('sesionLoginInicio');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('idAsambPerf');
    localStorage.removeItem('user');
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
