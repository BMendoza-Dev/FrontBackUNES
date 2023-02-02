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
 //{{ itemsPerPage * (currentPage - 1) + i }}


  constructor( private administradorService:AdministradorService, private locaServicio: LocalProyectService){
    
    locaServicio.$emitter.subscribe(() => {
      this.cargarTabla();
    });
  };

  title = 'pagination';
  POSTS:any;
  page:number = 1;
  count:number = 0;
  tableSize:number = 10;
  tableSizes:any = [5,10,15,20];
  
  search:any = "";
  dataTabla:any= [];
  datosAsambleistasInput:any = [];
  activarModal:string;
  customStylesValidated = false; iconEyeAsam:string = "password"
  editNombre_ApellidoAsambleista:string = "";  editCorreoAsambleista:string = ""; editContrasenaAsambleista:any=""; estado:number;

  seletedH:boolean = false; seletedD:boolean = false;

  id_perfil:string = ""; id:string = ""; num:number = 1;

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
      'name':this.editNombre_ApellidoAsambleista.toUpperCase(),
      'email':this.editCorreoAsambleista,
      'password':this.editContrasenaAsambleista,
      'perfil_id':this.id_perfil,
      'estado': this.estado,
      'id' : this.id
    }
    debugger
    this.administradorService.updateAsamAsisCuentas(formUpdateAsambleista).then(data =>{
      this.cargarTabla();
      
    }).catch(error =>{
      console.log(error);
    })
  }

  limpiarModal(){
    this.editContrasenaAsambleista = "";
    this.editNombre_ApellidoAsambleista = "";
    this.editCorreoAsambleista = "";
    this.search = "";

  }

  cargarTabla(){
     //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuentaAsambleista().then(data =>{
      this.dataTabla = data;
      //this.POSTS = this.dataTabla;
      this.limpiarModal();
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
    this.estado = this.datosAsambleistasInput[2];
    this.id = this.datosAsambleistasInput[3];
    this.id_perfil = this.datosAsambleistasInput[4];
    debugger
  }

  idCont:number=1;
  onTableDataChange(event:any){
    this.page = event;
    this.idCont; 
    debugger
  }

  /*onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    debugger
  }*/

  cuentasFilter:any = [];
  dataPaginate(_event:any){
    this.cuentasFilter=[];
      //this.cuentasPaginateFilter=[];
    if(this.search==""){
      debugger
      //this.citasMGPaginate = this.citasMG.slice(0, 10);
    }else{
      debugger
      for (const x of this.dataTabla) {
        debugger
        if(x.name.indexOf(this.search.toUpperCase()) > -1){
         this.cuentasFilter.push(x);
         debugger
       };
       
      };
      this.cuentasFilter
      debugger
      //this.cuentasPaginateFilter = this.cuentasFilter.slice(0, 10);

    }
  }
}
