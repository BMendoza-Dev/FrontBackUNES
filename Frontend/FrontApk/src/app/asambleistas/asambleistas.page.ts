import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { PerfilAsamService } from '../api/rest/perfil-asam.service';

@Component({
  selector: 'app-asambleistas',
  templateUrl: './asambleistas.page.html',
  styleUrls: ['./asambleistas.page.scss'],
})
export class AsambleistasPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private rest:PerfilAsamService, public loadCont: LoadingController, private sanitizer: DomSanitizer) { }

  assambly:any = [];
  textoBuscar = "";
   i=0; j=10; i2=0;
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.assambly = [];
    this.showLoading();
    this.getAssambly(event);
  }

  thumbnail: any; pruebaImagen:any;
  getAssambly(event) {
    /*this.rest.getAssamblyList().subscribe(response => {
      
      for(let i=0; i < response['length']; i++){
        if(response[i].politicalParty == "UNIÓN POR LA ESPERANZA"){
          this.assambly.push(response[i]);
        }
      }
    
      //event.target.complete();
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });*/
    
    this.rest.getAssamblyList().then(data =>{
       this.assambly = data;
       var datoPrueba:any = [{id: this.assambly[1].id, LastFirstName: this.assambly[1].lastName +' '+ this.assambly[1].firstName,territorialDivision: this.assambly[1].territorialDivision, imagen: this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.assambly[1]['imagen'].imagen),curul: this.assambly[1].curul}];
       for (var i = 2; i < this.assambly.length; i++) {
        let objectURL = 'data:image/jpeg;base64,' + this.assambly[i]['imagen'].imagen;
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
        this.loadCont.dismiss();
       
    }).catch(error =>{
      
      this.loadCont.dismiss();
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
