import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Echo from 'laravel-echo';
import { LoginService } from '../api/rest/login.service';
import { PerfilAsamService } from '../api/rest/perfil-asam.service';
import { ScriptServiceService } from '../api/rest/script-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private service:LoginService,private scriptService: ScriptServiceService, 
    private sanitizer: DomSanitizer, private login: LoginService, private rest: PerfilAsamService) {
   
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

  ngOnInit() {
  }
  ionViewDidLeave() {
    //this.scriptService.removeScript('twitter');
  }


  slidesOptions = {
    slidesPerView: 1.5
  }
}
