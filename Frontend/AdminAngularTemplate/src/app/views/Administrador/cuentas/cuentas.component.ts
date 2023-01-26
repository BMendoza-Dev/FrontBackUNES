import { Component, OnInit } from '@angular/core';
import {AdministradorService} from './../../../servicios/administrador.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  customStylesValidated = false;
  customStylesValidated2 = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor(private administradorService:AdministradorService, ) { }

  ngOnInit(): void {
    this.cargarTabla();
   }

  /*-----------------------------Form Cuenta Asambleista------------------------------------*/
                            
  //Input de Asambleista Cuenta

  activiteNavAsam:boolean=true;
  nombreAsambleista:string; apellidoAsambleista:string; correoAsambleista:string; contrasenaAsambleista:string;
  nombreAsisAsam:string; apellidoAsisAsam:string; correoAsisAsam:string; contrasenaAsisAsam:string;
  asamPerfil:boolean = false;
  notFound:any = "No se encuentra asambleista";

  //Funciones de Asambleista Cuenta

  idAsambleiApiAsam:string = "";
  selectEvent(item:any) { // Evento para obtener valor del ng-autocomplete
    this.idAsambleiApiAsam = item.id;
    this.asamPerfil = true
    
  }

  habilitarCampos:boolean = false;
  habilitar(){ // Habilitar los input de Cuenta Asambleistas
    if(this.idAsambleiApiAsam != "" && this.asamPerfil == true){
        this.habilitarCampos = true;
    } 
  }

  onClear(){
    this.asamPerfil = false;
  }

  
  iconEyeAsam:string = "password";
  cambiarIconAsam(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsam == "text"){
      this.iconEyeAsam = "password";
    }else{
      this.iconEyeAsam = "text";
    }
  }

  
  delegadoCuentaCampos:boolean=false;
  activarCuentaDelegado(){ //Habilitar los campos para el Asistente asignar
    if(this.delegadoCuentaCampos == true){
      this.delegadoCuentaCampos = false;
    }else{
      this.delegadoCuentaCampos = true;
    }
  }

  
  iconEyeAsamAsis:string = "password";
  cambiarIconAsamAsis(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsamAsis == "text"){
      this.iconEyeAsamAsis = "password";
    }else{
      this.iconEyeAsamAsis = "text";
    }
  }

  cargarTabla(){ //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuenta().then(data =>{
      this.dataTabla = data;
      this.dataTabla = this.dataTabla['result'];
    }).catch(error =>{
      console.log(error);
    })
  }

  crearCuentaAsam(){ //Crear la cuenta con los inputs con valores de Asambleista
    if( this.nombreAsambleista != undefined  &&  this.apellidoAsambleista != undefined && this.correoAsambleista != undefined && this.contrasenaAsambleista != undefined && this.delegadoCuentaCampos != true){
      
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }else if(this.nombreAsisAsam != undefined && this.apellidoAsisAsam != undefined && this.correoAsisAsam != undefined && this.contrasenaAsisAsam != undefined ){
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }

    
  }

  /*-----------------------------------------------------------------*/

  /*-----------------------------Form Cuenta Asistente------------------------------------*/

  //Input de Asistentes Cuentas

  nombreAsistente:string; apellidoAsistente:string; correoAsistente:string; contrasenaAsistente:string; asambleistaPerfil:string;

  

  //Funciones de Asistentes Cuentas

  idAsambleiApiAsis:string = "";
  selectEventAsis(item:any) { // Evento para obtener valor del ng-autocomplete
    this.idAsambleiApiAsis = item.id;
    this.asamPerfil = true;
  }

  iconEyeAsistente:string = "password";
  cambiarIconAsis(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsistente == "text"){
      this.iconEyeAsistente = "password";
    }else{
      this.iconEyeAsistente = "text";
    }
  }

  crearCuentaAsis(){ //Crear la cuenta con los inputs con valores de Asistente
    if( this.nombreAsistente != undefined  &&  this.apellidoAsistente != undefined && this.correoAsistente != undefined && this.contrasenaAsistente != undefined && this.idAsambleiApiAsis != "" && this.asamPerfil == true){
      
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }else if(this.nombreAsisAsam != undefined && this.apellidoAsisAsam != undefined && this.correoAsisAsam != undefined && this.contrasenaAsisAsam != undefined ){
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }
  }
  /*-----------------------------------------------------------------*/

  dataTabla:any= [];
  keyword = 'name';
  activiteNavAsis:boolean=false;
  dataAsmbleista = [
    {
      id: 1,
      name: 'Georgia'
    },
     {
       id: 2,
       name: 'Usa'
     },
     {
       id: 3,
       name: 'England'
     }
  ];

  

  onChangeSearch(val: any) {
    val;
    
  }
  
  onFocused(e:any){
    e
    
  }
  
  
  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onSubmit2() {
    this.customStylesValidated2 = true;
    console.log('Submit... 2');
  }

  onReset1() {
    this.customStylesValidated = false;
    this.habilitarCampos = false;
    this.idAsambleiApiAsam = "";
    this.delegadoCuentaCampos = false;
    console.log('Reset... 1');
  }

  onReset2() {
    this.customStylesValidated2 = false;
    console.log('Reset... 2');
  }

  
}
