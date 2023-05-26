import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import Swal from 'sweetalert2';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { PasswordValidators } from 'src/app/classLocal/PasswordValidators';
@Component({
  selector: 'app-forms-delegado',
  templateUrl: './forms-delegado.component.html',
  styleUrls: ['./forms-delegado.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsDelegadoComponent implements OnInit {

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  dataAsmbleista: any = [];
  idAsambleiApiAsis: number;
  filteredOptions: any[];
  myControl = new FormControl('');
  constructor(private spinnerService: SpinnerService,
    private adminService: AdministradorService, private localServi: LocalProyectService,
    public validationFormsService: ValidationFormsService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit(): void {
    this.cargarCuentasAsambleista();
  }

  guardarCuentaAsistente() {
    this.spinnerService.llamarSpinner();
    let formAsambleista = {
      'name': this.simpleForm.value.username,
      'email': this.simpleForm.value.email,
      'password': this.simpleForm.value.password,
      'rol_id': 3,
      'perfil_id': this.idAsambleiApiAsis,
      'estado': 1
    }

    this.adminService.registerCuentaAsambleistaAsistente(formAsambleista).then(() => {
      this.submitted = false;
      Swal.fire('Guardado!', '', 'success')
      this.onReset2();
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
    })
  }

  crearCuentaAsis() { //Crear la cuenta con los inputs con valores de Asistente
    Swal.fire({
      title: 'Esta seguro que desea crear una cuenta?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Crear',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.guardarCuentaAsistente();
      } else if (result.isDenied) {
        Swal.fire('No se a guardado la cuenta', '', 'info')
      }
    })
  }

  onReset2() {
    this.idAsambleiApiAsis = 0;
    let usernameControl = this.simpleForm.get('userAssam');
    usernameControl?.setValue('');
    this.simpleForm.reset();
    this.localServi.emitirEventoTablaAsistente();
  }

  cargarCuentasAsambleista() {
    this.adminService.cargarCuentaByRol("asambleista").then((data: any) => {
      this.dataAsmbleista = data;
      if (data.code != 404) {
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
        this.cargarAutoComplete();
      }
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      
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
        ],
        userAssam: [
          "",
          [
            Validators.required,
          ]
        ]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  private _filter() {
    const filterValue = this.simpleForm.value.userAssam.toLowerCase();
    let valor = this.dataAsmbleista.filter((option: any) => option.name.toLowerCase().includes(filterValue));
    if (valor.length == 1) {
      this.idAsambleiApiAsis = valor[0].id;
    }
    return valor;
  }
  cargarAutoComplete() {
    this.filteredOptions = this._filter();
  }



}
