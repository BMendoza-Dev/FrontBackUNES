import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private sanitizer: DomSanitizer,private rest:AmbitoTerritorialService, private loadCont: LoadingController, private restAss:AssamblymembersService) { }
  
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

  asambleTerri:any = []; thumbnail: any;
  ambTerri(lisAsamble : string){
    this.rest.getAsambleistaTerritorio(lisAsamble).subscribe(response =>{
      this.asambleTerri=response;
      
      if(this.asambleTerri.length == 0){
        this.NullAsa = true;
      }else{
        var datoPrueba:any = [{id: '', lastName: '', firstName: '',imagen: ''}];
       for (var i = 0; i < this.asambleTerri.length; i++) {
        let objectURL = 'data:image/jpeg;base64,' + this.asambleTerri[i]['imagen'].imagen;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          datoPrueba.push({
            "id" : this.asambleTerri[i].id,
            "lastName" : this.asambleTerri[i].lastName,
            "firstName": this.asambleTerri[i].firstName,
            "imagen": this.thumbnail
          }); 
        }
        debugger

        this.asambleTerri = datoPrueba;
      }
      this.load = false;
    },error => {console.error('Error login >>' + JSON.stringify(error)); });
  }

  @ViewChild('listenerOut', { static: false }) listenerOut: ElementRef;

  load:boolean; NullAsa:boolean;
  accordionGroupChange = (ev: any) => {
    let lisAsa
    if( ev['detail'].value != undefined){
      this.load = true;
      this.NullAsa = false;
      lisAsa = ev['detail'].value;
      this.asambleTerri = [];
      this.ambTerri(lisAsa);
    }else{
      this.load = false;
    }
    
  };


}
