import { Component, OnInit } from '@angular/core';
import {AdministradorService} from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
import {LocalProyectService} from './../../../../servicios/local-proyect.service';
@Component({
  selector: 'app-table-delegado',
  templateUrl: './table-delegado.component.html',
  styleUrls: ['./table-delegado.component.scss']
})
export class TableDelegadoComponent implements OnInit{

  constructor (private administradorService: AdministradorService, private locaServicio:LocalProyectService){
    locaServicio.$emitter2.subscribe(() => {
      this.cargarTabla();
    });
  }


  ngOnInit(): void {
    this.cargarTabla();
  }

  dataTabla:any = []; customStylesValidated = false; editNombre_ApellidoAsambleista:string = ""; editCorreoAsistente:string = "";
  editContrasenaAsistente:string = ""; iconEyeAsam:string = "password"; datosAsistenteInput:any=[];
  estado:number = 1; id:number; id_perfil:number;
  cargarTabla(){
    //Carga los datos de las cuentas de asambleistas en una tabla
   this.administradorService.cargarCuentaAsistente().then(data =>{
     this.dataTabla = data;
     
   }).catch(error =>{
     console.log(error);
   })
 }

    onSubmit(){
      this.customStylesValidated = true;
      console.log('Submit... 1');
    }

    cambiarIconAsam(){ //Cambio de Icono en el Password Input Asambleista
      if(this.iconEyeAsam == "text"){
        this.iconEyeAsam = "password";
      }else{
        this.iconEyeAsam = "text";
      }
    }

    updateAsisCuentas(){
      debugger
      let formUpdateAsambleista = {
        'name':this.editNombre_ApellidoAsambleista,
        'email':this.editCorreoAsistente,
        'password':this.editContrasenaAsistente,
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

    camposInputEditar(name:any, email:any, estado:any, id:any, perfil_id:any){
      this.datosAsistenteInput = [];
      
      this.datosAsistenteInput.push(name);
      this.datosAsistenteInput.push(email);
      this.datosAsistenteInput.push(estado);
      this.datosAsistenteInput.push(id);
      this.datosAsistenteInput.push(perfil_id)
      debugger
      this.cargarCamposModalEdit();
      //this.locaServicio.emitirEventoModalAsalbleistaEditar();
    }

    cargarCamposModalEdit(){
      this.editNombre_ApellidoAsambleista = this.datosAsistenteInput[0];
      this.editCorreoAsistente = this.datosAsistenteInput[1];
      //this.estado = this.datosAsambleistasInput[3];
      this.estado = 1;
      this.id = this.datosAsistenteInput[3];
      this.id_perfil = this.datosAsistenteInput[4];
      debugger
    }
}
