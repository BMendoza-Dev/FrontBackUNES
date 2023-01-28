import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AdministradorService} from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forms-asam-dele',
  templateUrl: './forms-asam-dele.component.html',
  styleUrls: ['./forms-asam-dele.component.scss']
})
export class FormsAsamDeleComponent implements OnInit {

  
  @Input() datosngautoperfil:any = [];
  @Output() habilitarCampos = new EventEmitter<boolean>();
  
  


  constructor(private administradorService:AdministradorService){}
   nombreAsambleista:string;
   apellidoAsambleista:string;
   idAsambleiApiAsam:string;
  customStylesValidated1 = false; iconEyeAsam:string = "password"; delegadoCuentaCampos:boolean=false;
  correoAsambleista:string=""; contrasenaAsambleista:string=""; nombreAsisAsam:string = ""; apellidoAsisAsam:string = ""; correoAsisAsam:string = ""; contrasenaAsisAsam:string = "";
  iconEyeAsamAsis:string = "password";

  ngOnInit(): void {
    this.nombreAsambleista= this.datosngautoperfil[1]; 
   this.apellidoAsambleista = this.datosngautoperfil[2]; 
   this.idAsambleiApiAsam = this.datosngautoperfil[0];
   debugger
  }

  ngOnDestroy(): void {
    this.nombreAsambleista = "";
    this.apellidoAsambleista = "";
    this.idAsambleiApiAsam = "";
    this.contrasenaAsambleista = "";
    this.correoAsambleista = "";
    debugger
  }

  cambiarIconAsam(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsam == "text"){
      this.iconEyeAsam = "password";
    }else{
      this.iconEyeAsam = "text";
    }
  }

  activarCuentaDelegado(){ //Habilitar los campos para el Asistente asignar
    if(this.delegadoCuentaCampos == true){
      this.delegadoCuentaCampos = false;
    }else{
      this.delegadoCuentaCampos = true;
    }
  }

  
  cambiarIconAsamAsis(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeAsamAsis == "text"){
      this.iconEyeAsamAsis = "password";
    }else{
      this.iconEyeAsamAsis = "text";
    }
  }

  

  onSubmit1() {
    this.customStylesValidated1 = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated1 = false;
    this.habilitarCampos.emit(false);
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

  guardarCuentaAsambleista(){
    let formAsambleista = {
      'name':this.nombreAsambleista + " " + this.apellidoAsambleista,
      'email':this.correoAsambleista,
      'password':this.contrasenaAsambleista,
      'rol_id':2,
      'perfil_id':this.idAsambleiApiAsam,
      'estado':1
    }
    this.administradorService.registerCuentaAsambleista(formAsambleista).then(data =>{
      debugger
    }).catch(error =>{
      console.log(error);
    })
    
    
  }

  guardarCuentaAsistente(){
    let formAsambleista = {
      'name':this.nombreAsisAsam + " " + this.apellidoAsisAsam,
      'email':this.correoAsisAsam,
      'password':this.contrasenaAsisAsam,
      'rol_id':3,
      'perfil_id':this.idAsambleiApiAsam,
      'estado':1
    }
    this.administradorService.registerCuentaAsambleista(formAsambleista).then(data =>{
      debugger
    }).catch(error =>{
      console.log(error);
    })
  }

  registerAsambleistaForm(){
    if(this.delegadoCuentaCampos != true){
      if( this.nombreAsambleista != ""  &&  this.apellidoAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "" ){
        Swal.fire({
          title: 'Esta seguro que desea crear una cuenta?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Crear',
          denyButtonText: `No crear`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.guardarCuentaAsambleista();
            Swal.fire('Guardado!', '', 'success')
            this.onReset1();

          } else if (result.isDenied) {
            Swal.fire('No se a guardado la cuenta', '', 'info')
          }
        })
      }
    }else {
       if(this.nombreAsisAsam != "" && this.apellidoAsisAsam != "" && this.correoAsisAsam != "" && this.contrasenaAsisAsam != "" && this.nombreAsambleista != ""  &&  this.apellidoAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != ""){
        Swal.fire({
          title: 'Esta seguro que desea crear una cuenta?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Crear',
          denyButtonText: `No crear`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.guardarCuentaAsambleista();
            this.guardarCuentaAsistente();
            Swal.fire('Guardado!', '', 'success')
            this.onReset1();
          } else if (result.isDenied) {
            Swal.fire('No se a guardado la cuenta', '', 'info')
          }
        })
      }
    }
  }

}
