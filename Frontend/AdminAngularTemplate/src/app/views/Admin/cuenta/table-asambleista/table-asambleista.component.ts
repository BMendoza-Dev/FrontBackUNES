import { Component, OnInit } from '@angular/core';
import { AdministradorService } from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { LocalProyectService } from './../../../../servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-table-asambleista',
  templateUrl: './table-asambleista.component.html',
  styleUrls: ['./table-asambleista.component.scss']
})
export class TableAsambleistaComponent implements OnInit {

  constructor(private spinnerService:SpinnerService, private administradorService: AdministradorService, private locaServicio: LocalProyectService) {
    locaServicio.$emitter.subscribe(() => {
      this.cargarTabla();
    });
  };

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  search: any = "";
  dataTabla: any = [];
  datosAsambleistasInput: any = [];
  activarModal: string;
  customStylesValidated = false; iconEyeAsam: string = "password"
  editNombre_ApellidoAsambleista: string = ""; editCorreoAsambleista: string = ""; editContrasenaAsambleista: any = ""; estado: number;

  seletedH: boolean = false; seletedD: boolean = false;

  id_perfil: string = ""; id: string = ""; num: number = 1;

  ngOnInit(): void {
    this.cargarTabla();
  }

  onSubmit() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  //cargarTableFroms(datos:any){
  //this.cargarTabla();
  //}

  cambiarIconAsam() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeAsam == "text") {
      this.iconEyeAsam = "password";
    } else {
      this.iconEyeAsam = "text";
    }
  }

  updateAsambCuentas() {
    this.spinnerService.llamarSpinner();
    let formUpdateAsambleista = {
      'name': this.editNombre_ApellidoAsambleista,
      'email': this.editCorreoAsambleista,
      'password': this.editContrasenaAsambleista,
      'perfil_id': this.id_perfil,
      'estado': this.estado,
      'id': this.id
    }

    this.administradorService.updateAsamAsisCuentas(formUpdateAsambleista).then(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Cuenta actualizada!'
      })
      this.cargarTabla();

    }).catch(error => {
      console.log(error);
    })
  }

  limpiarModal() {
    this.editContrasenaAsambleista = "";
    this.editNombre_ApellidoAsambleista = "";
    this.editCorreoAsambleista = "";
    this.search = "";

  }

  cargarTabla() {
    this.spinnerService.llamarSpinner();
    //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuentaByRol("asambleista").then((data:any) => {
      if(data.code != 404){
        this.dataTabla = data;
      debugger
      //this.POSTS = this.dataTabla;
      this.spinnerService.detenerSpinner();
      this.limpiarModal();
      //this.spinner.hide('sample');
      }
    }).catch(error => {
      console.log(error);
    })
  }


  camposInputEditar(name: any, email: any, estado: any, id: any, perfil_id: any) {
    this.datosAsambleistasInput = [];
    this.datosAsambleistasInput.push(name);
    this.datosAsambleistasInput.push(email);
    this.datosAsambleistasInput.push(estado);
    this.datosAsambleistasInput.push(id);
    this.datosAsambleistasInput.push(perfil_id)

    this.cargarCamposModalEdit();
    //this.locaServicio.emitirEventoModalAsalbleistaEditar();
  }

  cargarCamposModalEdit() {
    this.editNombre_ApellidoAsambleista = this.datosAsambleistasInput[0];
    this.editCorreoAsambleista = this.datosAsambleistasInput[1];
    this.estado = this.datosAsambleistasInput[2];
    this.id = this.datosAsambleistasInput[3];
    this.id_perfil = this.datosAsambleistasInput[4];

  }

  idCont: number = 1;
  onTableDataChange(event: any) {
    this.page = event;
    this.idCont;

  }

  /*onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    
  }*/

  cuentasFilter: any = [];
  dataPaginate(_event: any) {
    this.page=1;
    this.cuentasFilter = [];
    //this.cuentasPaginateFilter=[];
    if (this.search == "") {

      //this.citasMGPaginate = this.citasMG.slice(0, 10);
    } else {

      for (const x of this.dataTabla) {
        if (x.name.toUpperCase().indexOf(this.search.toUpperCase()) > -1) {
          this.cuentasFilter.push(x);
        };
      };
      this.cuentasFilter;
    }
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
