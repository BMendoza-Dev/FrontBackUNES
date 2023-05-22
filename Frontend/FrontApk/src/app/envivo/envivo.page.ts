import { Component, OnInit } from '@angular/core';
import { GetFacebookLiveService } from '../api/rest/get-facebook-live.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envivo',
  templateUrl: './envivo.page.html',
  styleUrls: ['./envivo.page.scss'],
})
export class EnvivoPage implements OnInit {

  url:string = '';
  meeting =[
    {
      "nameVivo": 'Asamblea',
      "url": "https://www.facebook.com/100064644160947/videos/1394563744662898"
    },

    
    {
      "nameVivo": "Rafael Correa.",
      "url": "https://www.facebook.com/MashiRafaelOficial/videos/1271857323715592"
    },
    {
      "nameVivo": "Revolucion ciudadana.",
      "url": "https://www.facebook.com/RevolucionCiudadana5Oficial/videos/767175361523792"
    }
  ] ;
  token: string;
  constructor( private service:GetFacebookLiveService, private sanitizer: DomSanitizer) { 
    
  
  }

  ngOnInit() {

    // this.service.loginAssambly().then((item:any) => {
    //   this.token = item.token;
    //   this.service.getFacebookLive(this.token).subscribe((data) => {
    //       console.log(data);
    //       this.meeting = data[0].meetinggroup;
    //       // this.url = this.getSanizeUrl(data[0].url);
    //       this.url = data[0].url;
          
    //   })
    // });
    
  }

  getSafeUrl( url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/video.php?href='+url);
  }

  closeLoader(){

  }

}
