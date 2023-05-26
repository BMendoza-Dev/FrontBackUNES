import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministradorService } from './../../../../servicios/administrador.service';
import Swal from 'sweetalert2';
import { LocalProyectService } from './../../../../servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
@Component({
  selector: 'app-table-delegado',
  templateUrl: './table-delegado.component.html',
  styleUrls: ['./table-delegado.component.scss']
})
export class TableDelegadoComponent implements OnInit {

  search = "";
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  public visible = false;
  notFound: any = "No se encuentra asambleista";
  constructor(private spinnerService: SpinnerService, private administradorService: AdministradorService, private locaServicio: LocalProyectService) {
    locaServicio.$emitter2.subscribe(() => {
      this.cargarTabla();
    });
  }

  ngOnInit(): void {
    this.cargarTabla();
    this.cargarCuentaAsambleistaAutoCom();
  }

  dataTabla: any = []; customStylesValidated = false; editNombre_ApellidoAsambleista: string = ""; editCorreoAsistente: string = "";
  editContrasenaAsistente: any = ""; iconEyeAsam: string = "password";
  estado: number; id: number; id_perfil: number; dataAsam: any = []; keyword = 'name'; @ViewChild('autoComplete') valueAutocomplete: any;
  cargarTabla() {
    this.spinnerService.llamarSpinner();
    //Carga los datos de las cuentas de asambleistas en una tabla
    this.administradorService.cargarCuentaByRol("asistente").then((data: any) => {
      if (data.code != 404) {
        this.dataTabla = data;
      }else{
        this.dataTabla = [];
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
      'name': this.editNombre_ApellidoAsambleista,
      'email': this.editCorreoAsistente,
      'password': this.editContrasenaAsistente,
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
      this.spinnerService.detenerSpinner();
      
    })
  }

  camposInputEditar(name: any, email: any, estado: any, id: any, perfil_id: any) {
    this.editNombre_ApellidoAsambleista = name;
    this.editCorreoAsistente = email;
    this.estado = estado;
    this.id = id;
    this.id_perfil = perfil_id;
    this.dataAsam.forEach((item: any) => {
      
      if (item.perfil_id == this.id_perfil) {
        this.valueAutocomplete.query = item.name;
        
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  cuentasFilter: any = [];
  dataPaginate() {
    this.page = 1;
  }

  cargarCuentaAsambleistaAutoCom() {
    this.administradorService.cargarCuentaByRol("asambleista").then((data: any) => {
      if (data.code != 404) {
        this.dataAsam = data.map((item: any) => {
          
          if (item.estado == 1) {
            return item
          } else {
            return { perfil_id: 1 }
          }
        });
        this.dataAsam; 
      }
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
    })
  }

  selectEvent(item: any) {
    // Evento para obtener valor del ng-autocomplete
    this.cargarCuentaAsambleistaAutoCom();
    this.id_perfil = item.perfil_id;
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
