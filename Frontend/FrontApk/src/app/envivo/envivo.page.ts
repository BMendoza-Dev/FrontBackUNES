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
  meeting: any;
  token: string;
  constructor( private service:GetFacebookLiveService, private sanitizer: DomSanitizer) { 
    
  
  }

  ngOnInit() {

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

  getSafeUrl(url: string) {
    
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/video.php?href='+url);
  }

  closeLoader(){

  }

}
