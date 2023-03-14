import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
  selector: 'app-forms-asam-dele',
  templateUrl: './forms-asam-dele.component.html',
  styleUrls: ['./forms-asam-dele.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsAsamDeleComponent implements OnInit {


  @Input() datosngautoperfil: any = [];
  @Output() habilitarCampos = new EventEmitter<boolean>();
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  constructor(private administradorService: AdministradorService, private locaServicio: LocalProyectService
    ,public validationFormsService: ValidationFormsService,private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  userAsambleista: any;
  idAsambleiApiAsam: any;
  customStylesValidated1 = false; iconEyeAsam: string = "password"; delegadoCuentaCampos: boolean = false;
  correoAsambleista: string = ""; contrasenaAsambleista: string = ""; contrasenaConfAsambleista: string = "";
  userAsisAsam: string = ""; correoAsisAsam: string = ""; contrasenaAsisAsam: string = ""; contrasenaConfAsisAsam: string = ""



  ngOnInit(): void {
    this.locaServicio.formAsamble$.pipe(
      map((rest: any) => ({
        nombre_apellidoAsambleista: rest[1] + " " + rest[2] || null,
        idAsambleiApiAsam: rest[0] || null
      }))
    ).subscribe((rest) => {
      this.userAsambleista = rest.nombre_apellidoAsambleista;
      this.idAsambleiApiAsam = rest.idAsambleiApiAsam;
    })
  }

  ngOnDestroy(): void {
    this.userAsambleista = "";
    this.idAsambleiApiAsam = "";
    this.contrasenaAsambleista = "";
    this.correoAsambleista = "";

  }

  activarCuentaDelegado() { //Habilitar los campos para el Asistente asignar

    this.delegadoCuentaCampos = !this.delegadoCuentaCampos
    this.userAsisAsam = "";
    this.correoAsisAsam = "";
    this.contrasenaAsisAsam = "";
    this.contrasenaConfAsisAsam = ""
  }


  onReset1() {
    this.customStylesValidated1 = false;
    this.habilitarCampos.emit(false);
    this.idAsambleiApiAsam = "";
    this.delegadoCuentaCampos = false;
    this.userAsambleista = "";
    this.correoAsambleista = "";
    this.contrasenaAsambleista = "";
    this.userAsisAsam = "";
    this.correoAsisAsam = "";
    this.contrasenaAsisAsam = "";
    this.contrasenaConfAsisAsam = ""
    this.locaServicio.emitirEventoTablaAsalbleista();

    console.log('Reset... 1');
  }

  guardarCuentaAsambleista() {
    let formAsambleista = {
      'name': this.userAsambleista,
      'email': this.correoAsambleista,
      'password': this.contrasenaAsambleista,
      'rol_id': 2,
      'perfil_id': this.idAsambleiApiAsam,
      'estado': 1
    }
    this.administradorService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {

    }).catch(error => {
      console.log(error);
    })


  }

  guardarCuentaAsistente() {
    let formAsambleista = {
      'name': this.userAsisAsam,
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
      if (this.userAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "") {
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
      if (this.userAsisAsam != "" && this.correoAsisAsam != "" && this.contrasenaAsisAsam != "" && this.userAsambleista != "" && this.correoAsambleista != "" && this.contrasenaAsambleista != "") {
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
        ],
      },
      { validators: [PasswordValidators.confirmPassword] },
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

}
