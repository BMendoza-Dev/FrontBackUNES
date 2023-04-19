import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  identificador: any;
  uuid: any;

  
  constructor( ) {

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
  }

  async myFunction() {
    const deviceInfo = await Device.getId();
    this.identificador = deviceInfo.uuid;
  }
  
  // llamado de la función

  ngOnInit():void {
    this.myFunction();
  }
  ionViewDidLeave() {
    //this.scriptService.removeScript('twitter');
  }


  slidesOptions = {
    slidesPerView: 1.5
  }
}
