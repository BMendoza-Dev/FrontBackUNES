import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import Swal from 'sweetalert2';
import { AdministradorService } from './../../../../servicios/administrador.service';
export class PasswordValidators {
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password");
    const confirm = control.get("confirmPassword");
    if (password?.valid && password?.value === confirm?.value) {
      confirm?.setErrors(null);
      return null;
    }
    confirm?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}
@Component({
  selector: 'app-forms-delegado',
  templateUrl: './forms-delegado.component.html',
  styleUrls: ['./forms-delegado.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsDelegadoComponent implements OnInit {

  constructor(private adminService: AdministradorService, private localServi: LocalProyectService,
    public validationFormsService: ValidationFormsService, private formBuilder: FormBuilder) { 
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  @ViewChild('atributosAutoCompl') auComple: any;

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  userAsistente = ""; correoAsistente = ""; contrasenaAsistente = ""; contrasenaConfAsistente = ""; asambleistaPerfil = "";
  customStylesValidated2 = false; iconEyeAsistente: string = "password"; dataAsmbleista: any = []; keyword = 'name';
  asamPerfil: boolean = false; idAsambleiApiAsis: string = ""; notFound: any = "No se encuentra asambleista";

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


  selectEventAsis(item: any) { // Evento para obtener valor del ng-autocomplete
    this.auComple;
    debugger
    this.cargarCuentasAsambleista();
    this.idAsambleiApiAsis = item.id;
    this.asamPerfil = true;
  }

  onClear(c: any) {
    this.asamPerfil = false;

  }

  guardarCuentaAsistente() {
    let formAsambleista = {
      'name': this.userAsistente,
      'email': this.correoAsistente,
      'password': this.contrasenaAsistente,
      'rol_id': 3,
      'perfil_id': this.idAsambleiApiAsis,
      'estado': 1
    }
    this.adminService.registerCuentaAsambleistaAsistente(formAsambleista).then(data => {

    }).catch(error => {
      console.log(error);
    })
  }



  crearCuentaAsis() { //Crear la cuenta con los inputs con valores de Asistente
    if (this.asamPerfil == true && this.userAsistente != "" && this.correoAsistente != "" && this.contrasenaAsistente != "") {

      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `No crear`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAsistente();
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
    this.userAsistente = "";
    this.correoAsistente = "";
    this.contrasenaAsistente = "";
    this.idAsambleiApiAsis = "";
    this.contrasenaConfAsistente=""
    this.asamPerfil = false;
    this.auComple.query = "";

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

  onValidate() {
    this.submitted = true;
    // stop here if form is invalid
    return this.simpleForm.status === "VALID";
  }

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Submit form value
      console.warn(this.simpleForm.value);
      this.crearCuentaAsis();
      //this.rutas.navigate(['./']);
    }
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        //firstName: ["", [Validators.required]],
        //lastName: ["", [Validators.required]],
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        confirmPassword: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        autoCompl:[
          "",[
            Validators.required,
          ]
        ]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

}
