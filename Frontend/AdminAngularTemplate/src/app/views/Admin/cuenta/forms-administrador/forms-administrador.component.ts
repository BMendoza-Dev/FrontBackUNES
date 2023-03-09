import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationFormsService } from "./../../../../servicios/validation-forms.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';

@Component({
  selector: 'app-forms-administrador',
  templateUrl: './forms-administrador.component.html',
  styleUrls: ['./forms-administrador.component.scss'],
})
export class FormsAdministradorComponent implements OnInit {

  constructor(private adminService: AdministradorService, private localServi: LocalProyectService) { }

  simpleForm!: FormGroup;

  usuarioAdmin = ""; correoAdmin = ""; contrasenaAdmin = ""; asambleistaPerfil = "";
  customStylesValidated2 = false; iconEyeAsistente: string = "password"; dataAsmbleista: any = []; keyword = 'name';
  idAsambleiApiAsis: string = ""; notFound: any = "No se encuentra asambleista";

  ngOnInit(): void {
    this.cargarCuentasAsambleista();
  }

  onSubmit2() {
    this.customStylesValidated2 = true;
    console.log('Submit... 2');
  }

  cambiarIconAsis() { //Cambio de Icono en el Password Input Delegado
    if (this.iconEyeAsistente == "text") {
      this.iconEyeAsistente = "password";
    } else {
      this.iconEyeAsistente = "text";
    }
  }


  

  guardarCuentaAdmin() {
    let formAsambleista = {
      'name': this.usuarioAdmin.toUpperCase(),
      'email': this.correoAdmin,
      'password': this.contrasenaAdmin,
      'rol_id': 1,
      'perfil_id': 1,
      'estado': 1
    }
    this.adminService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {

    }).catch(error => {
      console.log(error);
    })
  }



  crearCuentaAdmin() { //Crear la cuenta con los inputs con valores de Asistente
    if ( this.usuarioAdmin != "" && this.correoAdmin != "" && this.contrasenaAdmin != "") {

      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAdmin();
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
    this.usuarioAdmin = "";
    this.correoAdmin = "";
    this.contrasenaAdmin = "";
    this.idAsambleiApiAsis = "";
    this.localServi.emitirEventoTablaAsistente();
    console.log('Reset... 2');
  }

  cargarCuentasAsambleista() {
    this.adminService.cargarCuentaByRol("asambleista").then(data => {
      this.dataAsmbleista = data;
      var datoPrueba: any = [{ id: this.dataAsmbleista[0].perfil_id, name: this.dataAsmbleista[0].name }];
      for (var i = 1; i < this.dataAsmbleista.length; i++) {
        if (this.dataAsmbleista[i].estado == 1) {
          datoPrueba.push({
            "id": this.dataAsmbleista[i].perfil_id,
            "name": this.dataAsmbleista[i].name,
          });
        }
      }
      this.dataAsmbleista = datoPrueba;
    }).catch(error => {
      console.log(error);
    });
  }

  salir() {
  }

  spinnerConfig = {
    bdColor: 'rgba(0, 0, 0, 0.8)',
    size: 'medium',
    color: '#fff',
    type: 'square-jelly-box',
    fullScreen: true,
    template: null,
    showSpinner: false
  };


}
