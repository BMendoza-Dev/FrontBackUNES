import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoginService } from '../api/rest/login.service';
import { PerfilAsamService } from '../api/rest/perfil-asam.service';
import { ScriptServiceService } from '../api/rest/script-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private scriptService: ScriptServiceService, private sanitizer: DomSanitizer, private login: LoginService, private rest: PerfilAsamService) { }

  perfil: SafeHtml;
  ngOnInit() {
    debugger
    this.rest.getBiografiaAssam(2290).subscribe((data: any) => {
      data;
      this.perfil = this.sanitizer.bypassSecurityTrustHtml(data.perfil);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }, error => (console.log(error)))
  }

  ionViewWillEnter() {
    debugger
  }

  ionViewDidEnter() {
    debugger
  }
  ionViewWillLeave() {

  }

  ionViewDidLeave() {
    this.scriptService.removeScript('twitter');
  }


  slidesOptions = {
    slidesPerView: 1.5
  }
}
