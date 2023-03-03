import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationFormsService } from "./../../../servicios/validation-forms.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ValidationFormsService]
})
export class ProfileComponent implements OnInit{
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];

  constructor(private spinner: NgxSpinnerService, private adminService: AdministradorService, private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService, public rutas: Router) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
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
        accept: [false, [Validators.requiredTrue]]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
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
      alert("SUCCESS!");
      this.update();
      this.salir();
      this.rutas.navigate(['./']);
    }
  }


  iconEyeContr = "password"
  iconEyeConfContr = "password"
  usuario:any = "";
  correo: any = "";
  contrasena: string = "";
  contrasenaConf: string = "";
  usuarioEdit: string = "";
  correoEdit: string = "";


  ngOnInit() {
    this.cargarInputAdmin();
  }

  cambiarIconContr() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeContr == "text") {
      this.iconEyeContr = "password";
    } else {
      this.iconEyeContr = "text";
    }
  }

  cambiarIconConfContr() { //Cambio de Icono en el Password Input Asambleista
    if (this.iconEyeConfContr == "text") {
      this.iconEyeConfContr = "password";
    } else {
      this.iconEyeConfContr = "text";
    }
  }


  datos: any = []
  cargarInputAdmin() {
    this.spinner.show('sample');
      this.usuario = localStorage.getItem('user');
      this.correo = localStorage.getItem('email');
      this.spinner.hide('sample');
  }


  mostrarInput: boolean = true;
  editarInput: boolean = false;
  mostrar() {
    this.mostrarInput = true;
    this.editarInput = false;

  }

  editar() {
    this.mostrarInput = false;
    this.editarInput = true;
    this.usuarioEdit = this.usuario;
    this.correoEdit = this.correo;
  }

  conConVal: any;
  update() {
    let data = {
      'name': this.usuarioEdit,
      'email': this.correoEdit,
      'password': this.contrasenaConf,
      'perfil_id': 1,
      'estado': 1,
      'id': 1
    };
    this.adminService.updateAsamAsisCuentas(data).then(data => {
      this.onReset();
    }).catch(error => {
      console.log(error);
    })
  }

  onReset1() {
    this.correoEdit = "";
    this.usuarioEdit = "";
    this.contrasena = "";
    this.contrasenaConf = "";
    this.conConVal = undefined;
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

}
