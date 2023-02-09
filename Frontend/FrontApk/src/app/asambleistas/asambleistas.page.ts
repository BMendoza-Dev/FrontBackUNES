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
    this.getAssambly();
  }

  thumbnail: any;
  getAssambly() {
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
       var datoPrueba:any = [{id: '', lastName: '', firstName: '',imagen: ''}];
       for (var i = 1; i < this.assambly.length; i++) {
        let objectURL = 'data:image/jpeg;base64,' + this.assambly[i]['imagen'].imagen;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          datoPrueba.push({
            "id" : this.assambly[i].id,
            "lastName" : this.assambly[i].lastName,
            "firstName": this.assambly[i].firstName,
            "imagen": this.thumbnail
          }); 
        }

        this.assambly = datoPrueba;
       
    }).catch(error =>{
      console.log(error);
    })
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }
}
