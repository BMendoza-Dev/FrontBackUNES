import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';
import { ViewEncapsulation } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as scriptjs from 'scriptjs';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.page.html',
  styleUrls: ['./biografia.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiografiaPage implements OnInit {
  id_perfil: any;
  lastName:any;
  firstName:any;
  peril: SafeHtml;
  cont: any;
  urlGet: any;
  urlfb: string = '';
  urlit: string = '';
  urlttk: string = '';
  urltw: string = '';
  constructor(public loadCont: LoadingController, private sanitizer: DomSanitizer, 
    private activatedRoute: ActivatedRoute, private rest: PerfilAsamService,
    private menuController:MenuController, private navCtrl:NavController) { }



  ngOnInit() {
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    this.lastName = this.activatedRoute.snapshot.paramMap.get("lastname");
    this.firstName = this.activatedRoute.snapshot.paramMap.get("firstname");
    this.getBiografia();
  }

  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  getBiografia() {
    this.showLoading();
    this.rest.ObtenerBiografiaApp(this.id_perfil).subscribe((data: any) => {

      this.trasformaImagen(data.img);
      this.peril = this.sanitizer.bypassSecurityTrustHtml(data.perfil);
      this.urlfb = data.urlfb
      this.urlit = data.urlit
      this.urlttk = data.urlttk
      this.urltw = data.urltw
      this.loadCont.dismiss();
      // this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
      //   .then(data => {
      //     console.log('script loaded ', data);
      //   }).catch(error => console.log(error));
    }, error => (console.log(error)))
  }


  ionViewDidLeave() {
    // this.scriptService.removeScript('twitter');
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
