import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { ScriptServiceService } from '../api/rest/script-service.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { CapacitorHttp, HttpResponse } from '@capacitor/core'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  identificador: any;
  uuid: any;
  videoId: any;


  constructor(private scriptService: ScriptServiceService,public loadCont: LoadingController) {

    /*const options:any = {
      rejectUnauthorized: false,
      transports: ['websocket']
    };
    this.ws = new WebSocket('wss://ec2-18-207-3-198.compute-1.amazonaws.com/app/apprc_key'
    );
    this.ws.onopen = () => {
      console.log('Conexión WebSocket abierta');
    };

    this.ws.onmessage = event => {
      console.log('Mensaje recibido:', event.data);
    };

    this.ws.onerror = error => {
      console.error('Error de WebSocket:', error);
    };*/

    //this.showLoading();

    this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
      .then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));


  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  async myFunction() {
    const deviceInfo = await Device.getId();
    this.identificador = deviceInfo.uuid;
  }

  // llamado de la función

  ngOnInit(): void {
    this.myFunction();
    const iframe = document.getElementById('youtube') as HTMLIFrameElement;
    iframe.addEventListener('load', () => {
      console.log('El iframe se ha cargado');
      setTimeout(() => {
        //this.loadCont.dismiss();
      }, 2000);
      
    });
    
  }
  ionViewDidLeave() {
    //this.scriptService.removeScript('twitter');
    
  }

  ngOndestroy() {
    this.scriptService.removeScript('twitter');
  }


  slidesOptions = {
    slidesPerView: 1.5
  }
}
