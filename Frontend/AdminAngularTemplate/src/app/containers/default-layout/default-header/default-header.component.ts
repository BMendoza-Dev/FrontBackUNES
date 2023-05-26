import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { HeaderComponent } from '@coreui/angular';
import Echo from 'laravel-echo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LoginService } from 'src/app/servicios/login.service';
import { navItem } from './../_nav';
import moment from 'moment';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
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
  danger = 'danger'; success = 'success'; warning='warning'

  rotateAnimation = false;
  notifiData: any = [];
  timeTrans: any;
  notifiDataFilter: any[] = [];
  autoClose: any;
  id_notify: any;

  toggleAnimation() {
    this.rotateAnimation = !this.rotateAnimation;
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private blogService:BlogServicesService,private localServi: LocalProyectService, private spinnerService:SpinnerService,
    public rutas: Router, private service: LoginService, private administradorService: AdministradorService, private sanitizer: DomSanitizer) {
    super();
    
    this.echo = this.service.getSockets();
    let rol = localStorage.getItem('sesionLoginInicio'); let id = localStorage.getItem('idUser');
    this.echo.channel('channel-NotifyBlosAdmin.' + rol + '.' + id)
      .listen('NotifyEventBlog', (resp: any) => {
        this.page=1;
        this.toggleAnimation();
        this.total=this.contNotifyView(resp['blog'])
        this.notifiData = resp['blog'];
        this.notifiDataFilter = this.notifiData;
        setTimeout(() => {
          this.toggleAnimation();
        }, 3000);
      });
  }

  contNotifyView(data:any){
    let total=0
    data.forEach((element:any) => {
      if(element.leido == null){
        total++
      }  
    });
    total;
    return total
  }

  showNotify(_idBlog: any, _id_notify:any, leido:any, date:any) {
    if(leido == null){
      this.blogService.viewNotify(_id_notify).then(() =>{})
    }
    if(date == "Revisar Blog"){
    this.autoClose = true
    this.localServi.dataNotifyIdRevisarSource.next(_idBlog);
    this.spinnerService.llamarSpinner();
    this.rutas.navigate(['/blogs/utlimas-noticias'])
    }else{
      this.autoClose = true;
      this.localServi.dataNotifyIdRechazadoAprobadoSource.next(_idBlog);
      this.spinnerService.llamarSpinner();
      this.rutas.navigate(['/blogs/lista-blogs']);
    }
  }


  ngOnInit(): void {
    this.mostrarImg();
    setTimeout ( () => {
      this.blogService.Notifique().then(()=>{
       
      });
    },500)
  }
  
  ngAfterViewInit(){
    
  }



  contrador: number = 10;
  onScroll() {
    setTimeout(() => {
      // cargar más elementos
      this.contrador = this.contrador + 10;
      this.tableSize = this.contrador;
    }, 1000);
  } 

  cargarNotif() {
    this.autoClose = 'outside' 
    this.notifiDataFilter = this.notifiData.map((item:any) => {
      const newItem = { ...item }; // crea una copia del objeto item
        const fecha = moment(item.time);
        newItem.time = fecha.locale('es').fromNow(); // modifica la copia en lugar del objeto original
      return newItem; // retorna la copia modificada
    });
    
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
    }, error => {  });
  }

  marcarLeidasNotify(){
    this.autoClose = true;
    this.blogService.make_notify_read_all();
    
  }
}
