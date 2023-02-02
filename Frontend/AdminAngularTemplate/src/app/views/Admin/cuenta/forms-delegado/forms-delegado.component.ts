import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import Swal from 'sweetalert2';
import {AdministradorService} from './../../../../servicios/administrador.service';

@Component({
  selector: 'app-forms-delegado',
  templateUrl: './forms-delegado.component.html',
  styleUrls: ['./forms-delegado.component.scss']
})
export class FormsDelegadoComponent implements OnInit{

  constructor(private adminService: AdministradorService, private localServi:LocalProyectService){}

  nombre_apellidoAsistente = ""; correoAsistente = ""; contrasenaAsistente = ""; asambleistaPerfil = "";
  customStylesValidated2 = false; iconEyeAsistente:string = "password"; dataAsmbleista:any = []; keyword = 'name';
  asamPerfil:boolean = false; idAsambleiApiAsis:string = ""; notFound:any = "No se encuentra asambleista";

  ngOnInit(): void {
    this.cargarCuentasAsambleista();
  }

 

  onSubmit2() {
    this.customStylesValidated2 = true;
    console.log('Submit... 2');
  }

  cambiarIconAsis(){ //Cambio de Icono en el Password Input Delegado
    if(this.iconEyeAsistente == "text"){
      this.iconEyeAsistente = "password";
    }else{
      this.iconEyeAsistente = "text";
    }
  }

  
  selectEventAsis(item:any) { // Evento para obtener valor del ng-autocomplete
    this.cargarCuentasAsambleista();
    debugger
    this.idAsambleiApiAsis = item.id;
    this.asamPerfil = true;
  }
  onChangeSearch(cs:Event){}
  onFocused(f:any){}

  onClear(c:any){
    this.asamPerfil = false;
    
  }

  guardarCuentaAsistente(){
    let formAsambleista = {
      'name':this.nombre_apellidoAsistente.toUpperCase(),
      'email':this.correoAsistente,
      'password':this.contrasenaAsistente,
      'rol_id':3,
      'perfil_id':this.idAsambleiApiAsis,
      'estado':1
    }
    this.adminService.registerCuentaAsambleistaAsistente(formAsambleista).then(data =>{
      
    }).catch(error =>{
      console.log(error);
    })
  }

 

  crearCuentaAsis(){ //Crear la cuenta con los inputs con valores de Asistente
    if( this.asamPerfil == true && this.nombre_apellidoAsistente != "" && this.correoAsistente != "" && this.contrasenaAsistente != "" ){
      
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAsistente();
          Swal.fire('Guardado!', '', 'success')
          this.onReset2();
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }
  }

  onReset2() {
    this.customStylesValidated2 = false;
    this.nombre_apellidoAsistente = "";
    this.correoAsistente = "";
    this.contrasenaAsistente = "";
    this.idAsambleiApiAsis = "";
    this.asamPerfil = false;
    this.localServi.emitirEventoTablaAsistente();
    console.log('Reset... 2');
  }

  cargarCuentasAsambleista(){
    var datoPrueba:any = [{id: '', name: '', idPos: ''}];
    this.adminService.cargarCuentaAsambleista().then(data =>{
      this.dataAsmbleista = data;
      
      for (var i = 0; i < this.dataAsmbleista.length; i++) {
        if(this.dataAsmbleista[i].estado == 1){
          datoPrueba.push({
            "id" : this.dataAsmbleista[i].perfil_id,
            "name" : this.dataAsmbleista[i].name,
            "idPos": i
          }); 
        }
    }
    delete datoPrueba[0];
    this.dataAsmbleista = datoPrueba;
    }).catch(error =>{
      console.log(error);
    });
  }

}
