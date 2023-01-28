import { Component, OnInit } from '@angular/core';
import {AdministradorService} from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-asambleista',
  templateUrl: './table-asambleista.component.html',
  styleUrls: ['./table-asambleista.component.scss']
})
export class TableAsambleistaComponent implements OnInit {

  constructor(private administradorService:AdministradorService){};
  dataTabla:any= [];

  ngOnInit():void{ 
    this.cargarTabla();
  }

  cargarTabla(){ //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuentaAsambleista().then(data =>{
      this.dataTabla = data;
      debugger
    }).catch(error =>{
      console.log(error);
    })
  }

  
}
