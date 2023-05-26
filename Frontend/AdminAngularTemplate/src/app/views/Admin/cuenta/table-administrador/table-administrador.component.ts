import { Component, OnInit } from '@angular/core';
import { AdministradorService } from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
import { LocalProyectService } from './../../../../servicios/local-proyect.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-table-administrador',
  templateUrl: './table-administrador.component.html',
  styleUrls: ['./table-administrador.component.scss'],

})
export class TableAdministradorComponent implements OnInit {
  editCorreoAdmin: any;
  editContrasenaAdmin: any;
  editUsuarioAdmin: any;
  search = "";
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  dataTabla: any = []; validTabla = true;
  customStylesValidated = false;
  iconEyeAsam: string = "password";
  estado: number; id: number; id_perfil: number;
  public visible = false;
  localEmail:any

  constructor(private spinnerService: SpinnerService, private spinner: NgxSpinnerService,
    private administradorService: AdministradorService, private locaServicio: LocalProyectService) {
      this.localEmail = localStorage.getItem('email');
    locaServicio.$emitter3.subscribe(() => {
      this.cargarTabla();
    });
  }

  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla() {
    this.spinnerService.llamarSpinner();
    this.administradorService.cargarCuentaByRol("super_administrador").then((data: any) => {
      if (data.code != 404) {
        this.dataTabla = data;
        if(this.dataTabla.length<=0){
          this.validTabla = true;
        }else{
          this.validTabla =false;
        }
        this.limpiarModal();
      }
      this.spinnerService.detenerSpinner();
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
    })
  }

  

  onSubmit() {
    this.customStylesValidated = true;
  }

  cambiarIconAsam() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeAsam == "text") {
      this.iconEyeAsam = "password";
    } else {
      this.iconEyeAsam = "text";
    }
  }

  updateAsisCuentas() {
    this.spinnerService.llamarSpinner();
    let formUpdateAsambleista = {
      'name': this.editUsuarioAdmin,
      'email': this.editCorreoAdmin,
      'password': this.editContrasenaAdmin,
      'perfil_id': 1,
      'estado': this.estado,
      'id': this.id
    }

    this.administradorService.updateAsamAsisCuentas(formUpdateAsambleista).then(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
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
      this.spinnerService.detenerSpinner();
      
    })
  }

  camposInputEditar(name: any, email: any, estado: any, id: any, perfil_id: any) {
    this.editUsuarioAdmin = name;
    this.editCorreoAdmin = email;
    this.estado = estado;
    this.id = id;
    this.id_perfil = perfil_id;
  }



  limpiarModal() {
    this.editUsuarioAdmin = "";
    this.editCorreoAdmin = "";
    this.editContrasenaAdmin = "";
    this.search = "";
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  dataPaginate() {
    this.page = 1;
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  eliminar(_id:any){

    Swal.fire({ 
      title: 'Estás seguro?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        this.administradorService.EliminadoLogicoUsuario(_id).then(()=>{
          Swal.fire(
            'Eliminado!',
            'Su blog ha sido eliminado.',
            'success'
          )
          this.cargarTabla();
        })
      }
    })
    
  }

}
