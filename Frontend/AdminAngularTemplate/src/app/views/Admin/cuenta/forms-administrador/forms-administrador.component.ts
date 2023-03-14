import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationFormsService } from "src/app/servicios/validation-forms.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';

/** passwords must match - custom validator */
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
  selector: 'app-forms-administrador',
  templateUrl: './forms-administrador.component.html',
  styleUrls: ['./forms-administrador.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsAdministradorComponent implements OnInit {

  constructor(public validationFormsService: ValidationFormsService, private adminService: AdministradorService, 
    private localServi: LocalProyectService, private formBuilder: FormBuilder) { 
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  usuarioAdmin = ""; correoAdmin = ""; contrasenaAdmin = ""; asambleistaPerfil = ""; contrasenaConfAdmin = "";
 iconEyeAsistente: string = "password"; dataAsmbleista: any = []; keyword = 'name';
  idAsambleiApiAsis: string = ""; notFound: any = "No se encuentra asambleista";

  ngOnInit(): void {
    this.cargarCuentasAsambleista();
  }

  onSubmit2() {
    console.log('Submit... 2');
  }

  cambiarIconAdmin() { //Cambio de Icono en el Password Input Delegado
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
      this.submitted = false;
      this.simpleForm.reset();
      this.onReset2();
    }).catch(error => {
      console.log(error);
    })
  }



  crearCuentaAdmin() { //Crear la cuenta con los inputs con valores de Asistente
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Crear',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAdmin();
          Swal.fire('Guardado!', '', 'success')
          
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
  }

  onReset2() {
    this.usuarioAdmin = "";
    this.correoAdmin = "";
    this.contrasenaAdmin = "";
    this.idAsambleiApiAsis = "";
    this.contrasenaConfAdmin = "";
    
    this.localServi.emitirEventoTablaAdministrador();
    
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
      this.crearCuentaAdmin();
      this.salir();
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
        ]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

}
