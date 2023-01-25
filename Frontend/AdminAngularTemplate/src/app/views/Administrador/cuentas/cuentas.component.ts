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
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor(private administradorService:AdministradorService, ) { }

  dataTabla:any= [];
  notFound:any = "No se encuentra asambleista"
  keyword = 'name';
  habilitarCampos:boolean = false;
  idAsambleiApi:any = "";
  tipo:string = "password";
  iconSVG:string = "cilLowVision";
  delegadoCuentaCampos:boolean=false;
  activiteNavAsa:boolean=true;
  activiteNavAsi:boolean=false;
  data = [
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

  selectEvent(item:any) {
    this.idAsambleiApi = item.id;
  }

  onChangeSearch(val: any) {
    val;
    debugger
  }
  
  onFocused(e:any){
    e
    debugger
  }

  habilitar(){
    if(this.idAsambleiApi != ""){
      this.habilitarCampos = true;
    }
  }

  cambiarIcon(){
    if(this.tipo == "text"){
      this.tipo = "password";

    }else{
      this.tipo = "text";
    }
  }

  activarCuentaDelegado(){
    if(this.delegadoCuentaCampos == true){
      this.delegadoCuentaCampos = false;
    }else{
      this.delegadoCuentaCampos = true;
    }
    
  }

  

  ngOnInit(): void {
    debugger
    this.administradorService.verImagen().subscribe(response => {
      debugger
      
        //this.territorialList = response;
        //this.territorialListFiltered = this.territorialList;
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });
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
  
  crearCuenta(){
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
  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    this.habilitarCampos = false;
    this.idAsambleiApi = "";
    this.delegadoCuentaCampos = false;
    console.log('Reset... 1');
  }

  
}
