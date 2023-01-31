import { Component, OnInit } from '@angular/core';
import {AdministradorService} from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';

import {LocalProyectService} from './../../../../servicios/local-proyect.service';
@Component({
  selector: 'app-table-asambleista',
  templateUrl: './table-asambleista.component.html',
  styleUrls: ['./table-asambleista.component.scss']
})
export class TableAsambleistaComponent implements OnInit {



  constructor( private administradorService:AdministradorService, private locaServicio: LocalProyectService){
    
    locaServicio.$emitter.subscribe(() => {
      this.cargarTabla();
    });
  };

  
  
  dataTabla:any= [];
  datosAsambleistasInput:any = [];
  activarModal:string;
  customStylesValidated = false; iconEyeAsam:string = "password"
  editNombre_ApellidoAsambleista:string = "";  editCorreoAsambleista:string = ""; editContrasenaAsambleista:any=null; estado:number = 1;

  id_perfil:string = ""; id:string = "";

  ngOnInit():void{ 
    this.cargarTabla();
  }

  onSubmit(){
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  //cargarTableFroms(datos:any){
    //this.cargarTabla();
  //}

  cambiarIconAsam(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsam == "text"){
      this.iconEyeAsam = "password";
    }else{
      this.iconEyeAsam = "text";
    }
  }

  updateAsambCuentas(){
    debugger
    let formUpdateAsambleista = {
      'name':this.editNombre_ApellidoAsambleista,
      'email':this.editCorreoAsambleista,
      'password':this.editContrasenaAsambleista,
      'perfil_id':this.id_perfil,
      'estado': this.estado,
      'id' : this.id
    }
    debugger
    this.administradorService.updateAsamAsisCuentas(formUpdateAsambleista).then(data =>{
      data
      debugger
    }).catch(error =>{
      console.log(error);
    })
  }

  cargarTabla(){
     //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuentaAsambleista().then(data =>{
      this.dataTabla = data;
      debugger
    }).catch(error =>{
      console.log(error);
    })
  }


  camposInputEditar(name:any, email:any, estado:any, id:any, perfil_id:any){
    this.datosAsambleistasInput = [];
    this.datosAsambleistasInput.push(name);
    this.datosAsambleistasInput.push(email);
    this.datosAsambleistasInput.push(estado);
    this.datosAsambleistasInput.push(id);
    this.datosAsambleistasInput.push(perfil_id)
    debugger
    this.cargarCamposModalEdit();
    //this.locaServicio.emitirEventoModalAsalbleistaEditar();
  }

  cargarCamposModalEdit(){
    this.editNombre_ApellidoAsambleista = this.datosAsambleistasInput[0];
    this.editCorreoAsambleista = this.datosAsambleistasInput[1];
    //this.estado = this.datosAsambleistasInput[2];
    this.estado;
    this.id = this.datosAsambleistasInput[3];
    this.id_perfil = this.datosAsambleistasInput[4];
    debugger
  }
  
}
