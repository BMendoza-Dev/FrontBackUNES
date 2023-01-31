import { Component, OnInit , Input } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  @Input() prueba:string;
  
  customStylesValidated1 = false;
  iconEyeAsam:string = "password";
  nombreAsambleista:string = ""; apellidoAsambleista:string = ""; correoAsambleista:string = ""; contrasenaAsambleista:string = "";
  nombreAsisAsam:string = ""; apellidoAsisAsam:string = ""; correoAsisAsam:string = ""; contrasenaAsisAsam:string = "";

  onSubmit1() {
    this.customStylesValidated1 = true;
    console.log('Submit... 1');
  }

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

  crearCuentaAsam(){ //Crear la cuenta con los inputs con valores de Asambleista
    if( this.nombreAsambleista != ""  &&  this.apellidoAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "" && this.delegadoCuentaCampos != true){
      
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
    }else if(this.nombreAsisAsam != "" && this.apellidoAsisAsam != "" && this.correoAsisAsam != "" && this.contrasenaAsisAsam != "" ){
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

  habilitarCampos:boolean = false;
  idAsambleiApiAsam:string = "";
  onReset1() {
    this.customStylesValidated1 = false;
    this.habilitarCampos = false;
    this.idAsambleiApiAsam = "";
    this.delegadoCuentaCampos = false;
    this.nombreAsambleista = ""; 
    this.apellidoAsambleista = ""; 
    this.correoAsambleista = ""; 
    this.contrasenaAsambleista = "";
    this.nombreAsisAsam = ""; 
    this.apellidoAsisAsam = ""; 
    this.correoAsisAsam = ""; 
    this.contrasenaAsisAsam= "";

    console.log('Reset... 1');
  }

  ngOnInit(): void {
    
  }
}
