import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-directo',
  templateUrl: './form-directo.component.html',
  styleUrls: ['./form-directo.component.scss'],
  providers: [ValidationFormsService]
})
export class FormDirectoComponent {
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
    this.cargarVideo();
  }

  cargarVideo(){
    let id = localStorage.getItem("idAsambPerf")
    this.adminService.listarVideo(id).then((data:any) => {
      let tamanio = data[0]['videos'].length;
      let titulo  = data[0]['videos'][tamanio-1].videotitulo;
      let descripcion  = data[0]['videos'][tamanio-1].videodescripcion;
      let url  = data[0]['videos'][tamanio-1].url;
      
      this.simpleForm.get('username')?.setValue(titulo);
      this.simpleForm.get('email')?.setValue(descripcion) ;
      this.simpleForm.get('password')?.setValue(url);

    }).catch(error => {
      this.spinnerService.detenerSpinner();
     
    })
  }

  guardarCuentaAdmin() {
    this.spinnerService.llamarSpinner();
    let idAsambPerf = localStorage.getItem("idAsambPerf");
    let formDirecto = {
      'videotitulo': this.simpleForm.value.username,
      'videodescripcion': this.simpleForm.value.email,
      'url': this.simpleForm.value.password,
      'perfil_id': idAsambPerf,
    }
    

    this.adminService.AgregarVideo(formDirecto).then(() => {
      this.submitted = false;
      this.simpleForm.reset();
      this.cargarVideo();
      Swal.fire('Guardado!', '', 'success');
    }).catch(error => {
      this.spinnerService.detenerSpinner();
     
    })
  }



  crearCuentaAdmin() { //Crear la cuenta con los inputs con valores de Asistente
    Swal.fire({
      title: 'Esta seguro que desea publicar el directo?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Publicar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.guardarCuentaAdmin();
      } else if (result.isDenied) {
        Swal.fire('No se publico el directo', '', 'info')
      }
    })
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
            
          ]
        ],
        email: ["", [Validators.required,
          Validators.minLength(this.validationFormsService.formRules.usernameMin),
          Validators.pattern(this.validationFormsService.formRules.nonEmpty)]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
          ]
        ],
      }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

}
