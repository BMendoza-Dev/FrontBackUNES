import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, NavController } from '@ionic/angular';
import { AmbitoTerritorialService } from '../../api/rest/ambito-territorial.service';
import { AssamblymembersService } from '../../api/rest/assamblymembers.service';

@Component({
  selector: 'app-ambitoterritorial',
  templateUrl: './ambitoterritorial.page.html',
  styleUrls: ['./ambitoterritorial.page.scss'],
})
export class AmbitoterritorialPage implements OnInit {
  private loading;
  y: number;
  constructor(private Nav:NavController ,private sanitizer: DomSanitizer,private rest:AmbitoTerritorialService, private loadCont: LoadingController, private restAss:AssamblymembersService) { }
  
  ambitoTerr:any=[];
  asamTerritorial:any=[];
  assambly:any=[];
  ngOnInit() {
    this.showLoading();
    this.getTerritorialList();
  }
  ionViewDidEnter(){
  }

  goInfAssam(id:any){
    this.Nav.navigateForward(`inf-asambleista/${id}`);
  }

  getTerritorialList() {
    
    this.rest.ObtenerTerritorioApp().subscribe(response => {
      this.y=0;
      this.ambitoTerr=response;
      this.loadCont.dismiss();
      
        //this.territorialList = response;
        //this.territorialListFiltered = this.territorialList;
    }, error => { 
      this.loadCont.dismiss();
      console.error('Error login >>' + JSON.stringify(error)); });
  }


  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  asambleTerri:any = []; thumbnail: any;
  ambTerri(lisAsamble : string){
    this.rest.ObtenerAsambleistaTerritorioApp(lisAsamble).subscribe(response =>{
      this.asambleTerri=response;
      
      if(this.asambleTerri.length == 0){
        this.NullAsa = true;
      }else{
        var datoPrueba:any = [{id: this.asambleTerri[0].id, LastFirstName: this.asambleTerri[0].lastName +' '+ this.asambleTerri[0].firstName, imagen: this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.asambleTerri[0]['imagen'][0].imagen),curul:this.asambleTerri[0].curul}];
       for (var i = 1; i < this.asambleTerri.length; i++) {
        let objectURL = 'data:image/jpeg;base64,' + this.asambleTerri[i]['imagen'][0].imagen;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          datoPrueba.push({
            "id" : this.asambleTerri[i].id,
            "LastFirstName" : this.asambleTerri[i].lastName +' '+ this.asambleTerri[i].firstName,
            "imagen": this.thumbnail,
            "curul": this.asambleTerri[i].curul
          }); 
        }
        
        this.asambleTerri = datoPrueba;
        
      }
      this.load = false;
    },error => {
      this.loadCont.dismiss();
      console.error('Error login >>' + JSON.stringify(error)); });
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


