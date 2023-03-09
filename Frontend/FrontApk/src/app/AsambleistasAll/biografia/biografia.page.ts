import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';
import { ViewEncapsulation } from '@angular/core'
import { DomSanitizer,SafeHtml  } from '@angular/platform-browser';
import * as scriptjs from 'scriptjs';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';
@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.page.html',
  styleUrls: ['./biografia.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiografiaPage implements OnInit {
  id_perfil: any;
  peril: SafeHtml;
  cont:any;
  constructor(private scriptService: ScriptServiceService,private sanitizer: DomSanitizer ,private activatedRoute: ActivatedRoute, private rest:PerfilAsamService) { }
 
  
 
  ngOnInit() {
    
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    this.getBiografia();
  }

  getBiografia(){
    this.rest.getBiografiaAssam(this.id_perfil).subscribe((data:any) =>{
      data;
      this.peril = this.sanitizer.bypassSecurityTrustHtml(data.perfil);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
    },error => (console.log(error)))
  }


  ionViewDidLeave() {
    this.scriptService.removeScript('twitter');
  }
  
}
