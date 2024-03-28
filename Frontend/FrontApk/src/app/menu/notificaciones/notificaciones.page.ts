import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import Echo from 'laravel-echo';
import { SocketsService } from 'src/app/api/rest/sockets.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  echo:Echo
  notifyData: any = [];
  lim = 10;

  constructor(private socket:SocketsService, private datePipe: DatePipe, 
    private Nav:NavController, private menuController:MenuController
    ,public loadCont: LoadingController, private navCtrl:NavController) {
    this.echo = this.socket.getSockets();
    let id_cuenta = localStorage.getItem('idUser');
    this.echo.channel('channel-NotifyAppUser.Editorial.'+id_cuenta)
    .listen('EventNotifyUsersApp', (resp:any) => {
      console.log(resp['NotifyInfo']);
      this.notifyData = resp['NotifyInfo'].map((item , index) =>{
        let data:any = []
        return data = {
          TipeNotify:item.TipeNotify,
          id_notify:item.id_notify,
          leido:item.leido,
          // created_at:item.NotifyInfo.created_at,
          editorialname:item.NotifyInfo.editorialname,
          id:item.NotifyInfo.id,
          updated_at: this.datePipe.transform(item.NotifyInfo.updated_at, 'dd/MM/yyyy'),
          editrialnum:item.NotifyInfo.editrialnum,
          descripcion : index % 2 == 0 
          ? `Ya puedes ver '${item.NotifyInfo.editorialname}' edición ${item.NotifyInfo.editrialnum}` 
          : `Aquí puedes leer la edición ${item.NotifyInfo.editrialnum} de ${item.NotifyInfo.editorialname}` 
        }
        
      });
    })
    console.log(this.echo)
   }

  ngOnInit() {
    this.showLoading();
    setTimeout ( () => {
      this.socket.NotifiqueUserApp().subscribe(() => {
        this.loadCont.dismiss();
      })
    },500)
    
    setTimeout (() => {
      this.loadCont.dismiss();
    },700)
  }

  goInfEdit(id: any,id_notify:any) {
    this.Nav.navigateForward(`inf-editorial/${id}`);
    this.socket.make_notify_read_AppMobile(id_notify).subscribe(() => {
      console.log("Entro al Make");
    })
  }

  onIonInfinite(event) {
    
    setTimeout(() => {
      this.lim += 10;
      event.target.complete();
    }, 600);
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  abrirMenu(){
    this.menuController.open();
  }

  goBack() {
    this.navCtrl.back();
  }

}
