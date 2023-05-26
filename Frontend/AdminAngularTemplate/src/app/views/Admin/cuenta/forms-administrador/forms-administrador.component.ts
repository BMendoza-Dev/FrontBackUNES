import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidationFormsService } from "src/app/servicios/validation-forms.service";
import Swal from 'sweetalert2';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { PasswordValidators } from 'src/app/classLocal/PasswordValidators'
/** passwords must match - custom validator */


@Component({
  selector: 'app-forms-administrador',
  templateUrl: './forms-administrador.component.html',
  styleUrls: ['./forms-administrador.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsAdministradorComponent implements OnInit {

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];

  constructor(private spinnerService: SpinnerService, public validationFormsService: ValidationFormsService,
    private adminService: AdministradorService,
    private localServi: LocalProyectService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }


  ngOnInit(): void {
  }

  guardarCuentaAdmin() {
    this.spinnerService.llamarSpinner();
    let formAsambleista = {
      'name': this.simpleForm.value.username,
      'email': this.simpleForm.value.email,
      'password': this.simpleForm.value.password,
      'rol_id': 1,
      'perfil_id': 1,
      'estado': 1
    }

    this.adminService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {
      this.submitted = false;
      this.simpleForm.reset();
      this.onReset2();
      Swal.fire('Guardado!', '', 'success');
    }).catch(error => {
      this.spinnerService.detenerSpinner();
     
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
      } else if (result.isDenied) {
        Swal.fire('No se a guardado la cuenta', '', 'info')
      }
    })
  }

  onReset2() {
    this.localServi.emitirEventoTablaAdministrador();
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
      this.crearCuentaAdmin();
      //this.rutas.navigate(['./']);
    }
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
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