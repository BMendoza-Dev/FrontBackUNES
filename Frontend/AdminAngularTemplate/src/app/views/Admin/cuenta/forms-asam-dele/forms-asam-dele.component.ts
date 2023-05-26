import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { PasswordValidators, PasswordValidatorsDele } from 'src/app/classLocal/PasswordValidators';

@Component({
  selector: 'app-forms-asam-dele',
  templateUrl: './forms-asam-dele.component.html',
  styleUrls: ['./forms-asam-dele.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsAsamDeleComponent implements OnInit {

  @Output() habilitarCampos = new EventEmitter<boolean>();
  simpleForm!: FormGroup;
  simpleFormDele!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  formControlsDele!: string[];
  idAsambleiApiAsam: any;
  delegadoCuentaCampos: boolean = false;

  constructor(private administradorService: AdministradorService, private spinnerService: SpinnerService,
    private locaServicio: LocalProyectService
    , public validationFormsService: ValidationFormsService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
    this.createFormDele();
  }

  ngOnInit(): void {
    this.locaServicio.formAsamble$.pipe(
      map((rest: any) => ({
        nombre_apellidoAsambleista: rest[1] + " " + rest[2] || null,
        idAsambleiApiAsam: rest[0] || null
      }))
    ).subscribe((rest: any) => {
      const user: any = this.simpleForm.get('username');
      user.setValue(rest.nombre_apellidoAsambleista);
      this.idAsambleiApiAsam = rest.idAsambleiApiAsam;
    })
  }

  activarCuentaDelegado() { //Habilitar los campos para el Asistente asignar
    this.delegadoCuentaCampos = !this.delegadoCuentaCampos
  }

  onReset1() {
    this.delegadoCuentaCampos = false;
    this.locaServicio.emitirEventoTablaAsalbleista();
    this.habilitarCampos.emit(false);
  }

  guardarCuentaAsambleista() {
    this.spinnerService.llamarSpinner();
    let formAsambleista = {
      'name': this.simpleForm.value.username,
      'email': this.simpleForm.value.email,
      'password': this.simpleForm.value.password,
      'rol_id': 2,
      'perfil_id': this.idAsambleiApiAsam,
      'estado': 1
    }

    this.administradorService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {
      Swal.fire('Guardado!', '', 'success')
      this.onReset1();
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
    })
  }

  guardarCuentaAsistente() {
    this.spinnerService.llamarSpinner();
    let formAsambleista = {
      'name': this.simpleFormDele.value.usernameDele,
      'email': this.simpleFormDele.value.emailDele,
      'password': this.simpleFormDele.value.passwordDele,
      'rol_id': 3,
      'perfil_id': this.idAsambleiApiAsam,
      'estado': 1
    }

    this.administradorService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {

    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
    })
  }

  registerAsambleistaForm() {
    if (this.delegadoCuentaCampos == false) {
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Crear',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAsambleista();
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    } else {
      Swal.fire({
        title: 'Esta seguro que desea crear una cuenta?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Crear',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.guardarCuentaAsambleista();
          this.guardarCuentaAsistente();
        } else if (result.isDenied) {
          Swal.fire('No se a guardado la cuenta', '', 'info')
        }
      })
    }

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

      this.registerAsambleistaForm();
      //this.salir();
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
      { validators: [PasswordValidators.confirmPassword] },
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  createFormDele() {
    this.simpleFormDele = this.formBuilder.group(
      {
        usernameDele: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        emailDele: ["", [Validators.required, Validators.email]],
        passwordDele: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        confirmPasswordDele: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ]
      },
      { validators: [PasswordValidatorsDele.confirmPasswordDele] },
    );
    this.formControlsDele = Object.keys(this.simpleFormDele.controls);
  }

}
