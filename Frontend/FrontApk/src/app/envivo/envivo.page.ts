import { Component, OnInit } from '@angular/core';
import { GetFacebookLiveService } from '../api/rest/get-facebook-live.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AmbitoTerritorialService } from '../api/rest/ambito-territorial.service';

@Component({
  selector: 'app-envivo',
  templateUrl: './envivo.page.html',
  styleUrls: ['./envivo.page.scss'],
})
export class EnvivoPage implements OnInit {

  url:string = '';
  meeting =[
    {
      "nameVivo": "Rafael Correa.",
      "descripcionVivo":"Presidente Ecuador",
      "url": "https://www.facebook.com/100047034700702/videos/3622975521279706"
    },
  ];
  token: string;
  urlBancada:any;
  constructor( private service:GetFacebookLiveService, 
    private sanitizer: DomSanitizer,
    private serviceAmbTerri:AmbitoTerritorialService,
    private menuController:MenuController,private http: HttpClient) { 
    
  
  }

  ngOnInit() {
    // this.getLatestLiveVideo();
    this.serviceAmbTerri.obtenerVideos(1).subscribe((data:any) => {
      let tamanio = data[0]['videos'].length;
      let titulo  = data[0]['videos'][tamanio-1].videotitulo;
      let descripcion  = data[0]['videos'][tamanio-1].videodescripcion;
      let url  = data[0]['videos'][tamanio-1].url;
      this.meeting.push({
        "nameVivo": titulo,
        "descripcionVivo":descripcion,
        "url":url
      });
      this.meeting.push({
        "nameVivo": "Rafael Correa.",
      "descripcionVivo":"Presidente Ecuador",
      "url": "https://www.facebook.com/100047034700702/videos/3622975521279706"
      });
    });
    this.service.loginAssambly().then((item:any) => {
      this.token = item.token;
      this.service.getFacebookLive(this.token).subscribe((data) => {
          console.log(data);
          this.meeting = data[0].meetinggroup;
          // this.url = this.getSanizeUrl(data[0].url);
          this.url = data[0].url;
          
      })
    });
    
  }

  // getLatestLiveVideo() {
  //   const pageId = '100072309433409'; // ID de la página o perfil
  //   const accessToken = 'EAALNgE5ZCn50BO3ZCFENoovpuEXE15O7xnBdqvlTzdCq7uDZC5QvrZBxUHKwYE2iLzPOZCvHHGWzyihA8sBKZC9KAUdahgmqykGnrDiWiQnnBYxVEuhUnAe9Ory45OUg03tQetM7Jelv3AsYag648cJ28meoHEPr76wnsloLlNsnjo5sOwc4SPCNpYsOKrFyDj4hrJ0EOCYGGXSqnfZCkbtduhhjZBZCmFDsqhaNkJLyGi1gZD'; // Reemplaza con tu token de acceso
  
  //   const apiUrl = `https://graph.facebook.com/v18.0/${pageId}?fields=live_videos&access_token=${accessToken}`;
  
  //   this.http.get(apiUrl).subscribe((response: any) => {
  //     
  //     const liveVideos = response.live_videos.data;
      
  //     if (liveVideos && liveVideos.length > 0) {
  //       const latestLiveVideoId = liveVideos[0].id;
  //       console.log('Último video en vivo:', latestLiveVideoId);
  //     } else {
  //       console.log('No hay transmisiones en vivo.');
  //     }
  //   });
  // }

  getSafeUrl( url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/video.php?href='+url);
  }

  closeLoader(){

  }

  abrirMenu(){
    this.menuController.open();
  }

}
