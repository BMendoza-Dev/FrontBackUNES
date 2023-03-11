import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';

@Component({
  selector: 'app-inf-asambleista',
  templateUrl: './inf-asambleista.page.html',
  styleUrls: ['./inf-asambleista.page.scss'],
})
export class InfAsambleistaPage implements OnInit {
  id_perfil: any; 
  algo: boolean = true; contacto: boolean = false; comisiones: boolean = false;
  edifice: any; floor: any; office: any; phone: any; email: any;
  comisionAss: any; cont:any;

  constructor(private Nav:NavController, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private rest: PerfilAsamService, public loadCont: LoadingController) { }

  ngOnInit() {
    //this.showLoading();
    
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAssambly();
  }

  assambly: any = []; urlGet: any; firstName: string; lastName: string; ambito: string = ""; curul: string = ""; partido: string = ""; jurisdiction: string = "";

  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  getAssambly() {
    this.rest.getAssamblyPerfil(this.id_perfil).subscribe((data: any) => {
      
      this.trasformaImagen(data.img);
      this.lastName = data.lastName;
      this.firstName = data.firstName;
      this.ambito = data.ambito;
      this.jurisdiction = data.jurisdiction;
      this.partido = data.partido;
      this.curul = data.curul;
      this.edifice = data.edifice,
      this.floor = data.floor,
      this.office = data.office,
      this.phone = data.phone,
      this.email = data.email
      this.comisionAss = data.comisiones

    },error =>{console.log(error)})
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  
  goInfAssam(id:any){
    this.Nav.navigateForward(`biografia/${id}`);
  }
  goVotosAssam(id:any){
    this.Nav.navigateForward(`votos-asambleista/${id}`);
  }


}
