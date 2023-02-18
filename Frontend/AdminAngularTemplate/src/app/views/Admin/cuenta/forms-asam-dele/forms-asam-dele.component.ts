import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AdministradorService } from './../../../../servicios/administrador.service';
import { LocalProyectService } from './../../../../servicios/local-proyect.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-forms-asam-dele',
  templateUrl: './forms-asam-dele.component.html',
  styleUrls: ['./forms-asam-dele.component.scss']
})
export class FormsAsamDeleComponent implements OnChanges, OnInit {


  @Input() datosngautoperfil: any = [];
  @Output() habilitarCampos = new EventEmitter<boolean>();

  constructor(private administradorService: AdministradorService, private locaServicio: LocalProyectService) { }

  nombre_apellidoAsambleista: any;
  idAsambleiApiAsam: any;
  customStylesValidated1 = false; iconEyeAsam: string = "password"; delegadoCuentaCampos: boolean = false;
  correoAsambleista: string = ""; contrasenaAsambleista: string = ""; nombre_apellidoAsisAsam: string = ""; correoAsisAsam: string = ""; contrasenaAsisAsam: string = "";
  iconEyeAsamAsis: string = "password";

  ngOnChanges() {
  }

  ngOnInit(): void {
    this.locaServicio.formAsamble$.pipe(
      map((rest: any) => ({
        nombre_apellidoAsambleista: rest[1] + " " + rest[2] || null,
        idAsambleiApiAsam: rest[0] || null
      }))
    ).subscribe((rest) => {
      this.nombre_apellidoAsambleista = rest.nombre_apellidoAsambleista;
      this.idAsambleiApiAsam = rest.idAsambleiApiAsam;
    })
  }

  ngOnDestroy(): void {
    this.nombre_apellidoAsambleista = "";
    this.idAsambleiApiAsam = "";
    this.contrasenaAsambleista = "";
    this.correoAsambleista = "";

  }

  cambiarIconAsam() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeAsam == "text") {
      this.iconEyeAsam = "password";
    } else {
      this.iconEyeAsam = "text";
    }
  }

  activarCuentaDelegado() { //Habilitar los campos para el Asistente asignar
    if (this.delegadoCuentaCampos == true) {
      this.delegadoCuentaCampos = false;
    } else {
      this.delegadoCuentaCampos = true;
    }
  }


  cambiarIconAsamAsis() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeAsamAsis == "text") {
      this.iconEyeAsamAsis = "password";
    } else {
      this.iconEyeAsamAsis = "text";
    }
  }


  onSubmit1() {
    debugger
    this.customStylesValidated1 = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated1 = false;
    this.habilitarCampos.emit(false);
    this.idAsambleiApiAsam = "";
    this.delegadoCuentaCampos = false;
    this.nombre_apellidoAsambleista = "";
    this.correoAsambleista = "";
    this.contrasenaAsambleista = "";
    this.nombre_apellidoAsisAsam = "";
    this.correoAsisAsam = "";
    this.contrasenaAsisAsam = "";
    this.locaServicio.emitirEventoTablaAsalbleista();

    console.log('Reset... 1');
  }

  guardarCuentaAsambleista() {
    let formAsambleista = {
      'name': this.nombre_apellidoAsambleista,
      'email': this.correoAsambleista,
      'password': this.contrasenaAsambleista,
      'rol_id': 2,
      'perfil_id': this.idAsambleiApiAsam,
      'estado': 1
    }
    this.administradorService.registerCuentaAsambleistaAsistente(formAsambleista).then(data => {

    }).catch(error => {
      console.log(error);
    })


  }

  guardarCuentaAsistente() {
    let formAsambleista = {
      'name': this.nombre_apellidoAsisAsam.toUpperCase(),
      'email': this.correoAsisAsam,
      'password': this.contrasenaAsisAsam,
      'rol_id': 3,
      'perfil_id': this.idAsambleiApiAsam,
      'estado': 1
    }
    this.administradorService.registerCuentaAsambleistaAsistente(formAsambleista).then(data => {

    }).catch(error => {
      console.log(error);
    })
  }

  registerAsambleistaForm() {
    if (this.delegadoCuentaCampos != true) {
      if (this.nombre_apellidoAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "") {
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
    } else {
      if (this.nombre_apellidoAsisAsam != "" && this.correoAsisAsam != "" && this.contrasenaAsisAsam != "" && this.nombre_apellidoAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "") {
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
