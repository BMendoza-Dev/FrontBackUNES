import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {AdministradorService} from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ngautoperfil',
  templateUrl: './ngautoperfil.component.html',
  styleUrls: ['./ngautoperfil.component.scss']
})
export class NgautoperfilComponent  implements OnInit{
 
  constructor(private administradorService:AdministradorService ){}

  

  datosngautoperfil:any=[];
  dataAsmbleista:any = []; datosAsambleistas:any; activiteNavAsis:boolean=false; activiteNavAsam:boolean=true; nombreAsambleista:string = ""; apellidoAsambleista:string = ""; correoAsambleista:string = ""; contrasenaAsambleista:string = "";
  idAsambleiApiAsam:string = ""; asamPerfil:boolean = false; idPosicionDataAsam:any; keyword = 'name';
  notFound:any = "No se encuentra asambleista";

  ngOnInit(): void {
    this.cargarPerfilesAsam();
  }

  tableAsamUpdate(){

    
  }

  ngOnDestroy():void{
    
    
  }

  cargarPerfilesAsam(){ //Carga los datos en el ng-autocomplete
    var datoPrueba:any = [{id: '', name: '', idPos: ''}];
    this.administradorService.cargarPerfiles().then(data =>{
      this.dataAsmbleista = data;
      
      for (var i = 0; i < this.dataAsmbleista.length; i++) {
        if(this.dataAsmbleista[i].active == 1){
          datoPrueba.push({
            "id" : this.dataAsmbleista[i].id,
            "name" : this.dataAsmbleista[i].firstName + " " + " " +this.dataAsmbleista[i].lastName,
            "idPos": i
          }); 
        }
    }

    

      delete datoPrueba[0];
      delete datoPrueba[1];
      
      this.datosAsambleistas = datoPrueba;
      
      
    }).catch(error =>{
      console.log(error);
    })
  }


  habilitarCampos:boolean = false;
  habilitar(){ // Habilitar los input de Cuenta Asambleistas
    if(this.idAsambleiApiAsam != "" && this.asamPerfil == true){
        this.habilitarCampos = true;
        this.datosngautoperfil=[];
        this.datosngautoperfil.push(this.idAsambleiApiAsam);
        this.datosngautoperfil.push(this.dataAsmbleista[this.idPosicionDataAsam].firstName);
        this.datosngautoperfil.push(this.dataAsmbleista[this.idPosicionDataAsam].lastName);
        
        this.dataAsmbleista = [];
        this.idAsambleiApiAsam = "";

        
    } 
  }

  selectEvent(item:any) { 
    // Evento para obtener valor del ng-autocomplete
    this.cargarPerfilesAsam();
    this.idAsambleiApiAsam = item.id;
    this.asamPerfil = true;
    this.idPosicionDataAsam = item.idPos; 
    
  }

  

  onChangeSearch(val: any) {
    val;
  }

  onFocused(e:any){
  }

  onClear(){
    this.asamPerfil = false;
    
  }

  onMensaje(habilitarCampos:any){
    this.habilitarCampos = habilitarCampos;
  }



}
