import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';

@Component({
  selector: 'app-inf-asambleista',
  templateUrl: './inf-asambleista.page.html',
  styleUrls: ['./inf-asambleista.page.scss'],
})
export class InfAsambleistaPage implements OnInit {
  id_perfil: any; algo:boolean= true;

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private rest: PerfilAsamService, public loadCont: LoadingController) { }

  ngOnInit() {
    //this.showLoading();
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id_perfil);
    this.getAssambly();
  }

  assambly: any = []; urlGet: any; firstName: string; lastName: string; ambito:string=""; curul:string=""; partido:string=""; jurisdiction:string="";

  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  getAssambly() {
    this.rest.getAssamblyPerfil(this.id_perfil).then(data => {
      this.assambly = data;
      debugger
      this.assambly['image'][0].imagen;
      this.trasformaImagen(this.assambly['image'][0].imagen);
      this.lastName = this.assambly['lastName'];
      this.firstName = this.assambly['firstName'];
      this.ambito = this.assambly['territorialDivision'];
      this.jurisdiction = this.assambly['jurisdiction'];
      this.partido = this.assambly['politicalParty'];
      this.curul = this.assambly['curul'];
      this.loadCont.dismiss();

    }).catch(error => {

      this.loadCont.dismiss();
      console.log(error);
    })
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

}
