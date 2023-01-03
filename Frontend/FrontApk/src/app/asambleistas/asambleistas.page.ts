import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { AssamblymembersService } from '../api/rest/assamblymembers.service';

@Component({
  selector: 'app-asambleistas',
  templateUrl: './asambleistas.page.html',
  styleUrls: ['./asambleistas.page.scss'],
})
export class AsambleistasPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private rest:AssamblymembersService, public loadCont: LoadingController) { }

  assambly:any=[];
  textoBuscar = "";
   i=0; j=10; i2=0;
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.assambly = [];
    this.getAssambly();
  }

  getAssambly() {
    this.rest.getAssamblyList().subscribe(response => {
      
      for(let i=0; i < response['length']; i++){
        if(response[i].politicalParty == "UNIÓN POR LA ESPERANZA"){
          this.assambly.push(response[i]);
        }
      }
    
      //event.target.complete();
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }
}
