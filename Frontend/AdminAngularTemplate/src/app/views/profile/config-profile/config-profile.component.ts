import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationFormsService } from "src/app/servicios/validation-forms.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { PasswordValidators } from 'src/app/classLocal/PasswordValidators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-config-profile',
  templateUrl: './config-profile.component.html',
  styleUrls: ['./config-profile.component.scss'],
  providers: [ValidationFormsService]
})
export class ConfigProfileComponent implements OnInit {
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  iconEyeContr = "password"
  iconEyeConfContr = "password"
  usuario: any = "";
  correo: any = "";
  contrasena: string = "";
  contrasenaConf: string = "";
  usuarioEdit: string = "";
  correoEdit: string = "";
  datos: any = [];
  mostrarInput: boolean = true;
  editarInput: boolean = false;

  constructor(private spinnerService: SpinnerService, private adminService: AdministradorService, private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService, public rutas: Router) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
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
    this.salir();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se actualizó la cuenta!',
      showConfirmButton: false,
      timer: 2500
    })
    this.spinnerService.detenerSpinner();
    setTimeout(() => {
      this.rutas.navigate(['./']);
    }, 3000);
    
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
      
      this.update();

    }
  }

  ngOnInit() {
    this.cargarInputAdmin();
  }
  
  cargarInputAdmin() {
    //this.spinner.show('sample');

    this.usuario = localStorage.getItem('user');
    this.correo = localStorage.getItem('email');
    //this.spinner.hide('sample');

  }


  mostrar() {
    this.mostrarInput = true;
    this.editarInput = false;

  }

  editar() {
    this.mostrarInput = false;
    this.editarInput = true;
    this.simpleForm.get('username')?.setValue( this.usuario);
    this.simpleForm.get('email')?.setValue(this.correo) ;
    
  }

  update() {

    Swal.fire({
      title: 'Esta seguro que desea actualizar su cuenta?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Actulizar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        let data = {
          'name': this.simpleForm.get('username')?.value,
          'email': this.simpleForm.get('email')?.value,
          'password': this.simpleForm.get('confirmPassword')?.value,
          'perfil_id': localStorage.getItem('idAsambPerf'),
          'estado': 1,
          'id': localStorage.getItem('idUser')
        };
        
        this.adminService.updateAsamAsisCuentas(data).then(() => {
          this.onReset();
        }).catch(error => {
          
        })
      }
    })
    
  }

  salir() {
    localStorage.clear();
  }


}
