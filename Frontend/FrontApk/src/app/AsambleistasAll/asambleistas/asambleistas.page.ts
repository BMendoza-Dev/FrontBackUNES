import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonInfiniteScroll, LoadingController, NavController } from '@ionic/angular';
import { PerfilAsamService } from '../../api/rest/perfil-asam.service';

@Component({
  selector: 'app-asambleistas',
  templateUrl: './asambleistas.page.html',
  styleUrls: ['./asambleistas.page.scss'],
})
export class AsambleistasPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private Nav:NavController ,private rest:PerfilAsamService, public loadCont: LoadingController, private sanitizer: DomSanitizer) { }


  assambly:any = [];
  textoBuscar = "";
  ngOnInit() {
    this.assambly = [];
    //this.showLoading();
    this.getAssambly(event);
  }

  goInfAssam(id:any){
    this.Nav.navigateForward(`inf-asambleista/${id}`);
  }

  ionViewDidEnter(){
  }

   eliminarOrder() {
    this.assambly.splice(0, 1);
    this.assambly.map((item, i)=> i===0 ? item.order=1 : item.order = this.assambly[i-1].order + 1)
    
  }

  thumbnail: any; pruebaImagen:any;
  getAssambly(event) {
    this.rest.getAssamblyList().then(data =>{
       this.assambly = data;
      //this.eliminarOrder();
       let datoPrueba:any = [{id: this.assambly[1].id, LastFirstName: this.assambly[1].lastName +' '+ this.assambly[1].firstName,territorialDivision: this.assambly[1].territorialDivision, imagen: this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.assambly[1]['image'][0].imagen),curul: this.assambly[1].curul}];
       for (let i = 2; i < this.assambly.length; i++) {
        let objectURL = 'data:image/jpeg;base64,' + this.assambly[i]['image'][0].imagen;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          datoPrueba.push({
            "id" : this.assambly[i].id,
            "LastFirstName" : this.assambly[i].lastName +' '+ this.assambly[i].firstName,
            "territorialDivision": this.assambly[i].territorialDivision,
            "imagen": this.thumbnail,
            "curul": this.assambly[i].curul
          }); 
        }
        this.assambly = datoPrueba;
        //this.loadCont.dismiss();
       
    }).catch(error =>{
      
      //this.loadCont.dismiss();
      console.log(error);
    })
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
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
