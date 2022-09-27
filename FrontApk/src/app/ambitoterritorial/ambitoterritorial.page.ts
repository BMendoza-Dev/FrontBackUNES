import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AmbitoTerritorialService } from '../api/rest/ambito-territorial.service';
import { AssamblymembersService } from '../api/rest/assamblymembers.service';

@Component({
  selector: 'app-ambitoterritorial',
  templateUrl: './ambitoterritorial.page.html',
  styleUrls: ['./ambitoterritorial.page.scss'],
})
export class AmbitoterritorialPage implements OnInit {
  private loading;
  y: number;
  constructor(private rest:AmbitoTerritorialService, private loadCont: LoadingController, private restAss:AssamblymembersService) { }
  
  ambitoTerr:any=[];
  asamTerritorial:any=[];
  assambly:any=[];
  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.getTerritorialList();
    //this.getAssambly();
  }

  getTerritorialList() {
    //this.showLoading();
    this.rest.getTerritorialList().subscribe(response => {
      this.y=0;
      this.ambitoTerr=response;
      
        //this.territorialList = response;
        //this.territorialListFiltered = this.territorialList;
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });
  }

  getAssambly() {
    this.restAss.getAssamblyList().subscribe(response => {
      
      for(let i=0; i < response['length']; i++){
        if(response[i].politicalParty == "UNIÓN POR LA ESPERANZA"){
          this.assambly.push(response[i]);
        }
      }
      
      //event.target.complete();
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });
  }

  showLoading() {
    this.loadCont.create({
      message: 'Por favor espere...',
      //duration: 3000,
      cssClass: 'custom-loading',
      animated: false
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
      if(this.y==0){
      this.loading.dismiss()
      };
    });
    
  }

  ambTerri(lisAsamble : string){
    this.asamTerritorial=[];
    for(let i=0; i < this.assambly['length']; i++){
      if(this.assambly[i].territorialDivision == lisAsamble){
        this.asamTerritorial.push(this.assambly[i]);
      }
    }
    this.asamTerritorial;
    
  }


}
