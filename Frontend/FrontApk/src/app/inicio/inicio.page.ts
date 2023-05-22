import { Component, OnDestroy, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { ScriptServiceService } from '../api/rest/script-service.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { CapacitorHttp, HttpResponse } from '@capacitor/core'
import { LoadingController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const {SplashScreen} = Plugins;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit,OnDestroy {
  identificador: any;
  uuid: any;
  videoId: any;


  constructor(private scriptService: ScriptServiceService,public loadCont: LoadingController) {
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
    //this.showLoading();
    this.myFunction();
    // const iframe = document.getElementById('youtube') as HTMLIFrameElement;
    // iframe.addEventListener('load', () => {
    //   console.log('El iframe se ha cargado');
    //   // setTimeout(() => {
    //   //   this.loadCont.dismiss();
    //   // }, 3000);
    //   // SplashScreen.hide();
    // });
    
  }
  ionViewDidLeave() {
    // this.scriptService.removeScript('twitter');
  }

  ngOnDestroy() {
    this.scriptService.removeScript('twitter');
  }


  slidesOptions = {
    slidesPerView: 1.5
  }
}
