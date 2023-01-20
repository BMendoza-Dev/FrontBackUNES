import { Component, OnInit } from '@angular/core';
import {AdministradorService} from './../../../servicios/administrador.service'
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor(private administradorService:AdministradorService, ) { }

  dataTabla:any= [];

  ngOnInit(): void {
    this.cargarTabla();
   }

  cargarTabla(){
    this.administradorService.cargarCuenta().then(data =>{
      this.dataTabla = data;
      this.dataTabla = this.dataTabla['result'];
      debugger
    }).catch(error =>{
      console.log(error);
    })
  }

  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  
}
