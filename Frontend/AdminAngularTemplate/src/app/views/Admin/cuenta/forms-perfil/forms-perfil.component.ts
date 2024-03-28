import { Component, OnInit } from '@angular/core';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { PasswordValidators } from 'src/app/classLocal/PasswordValidators'

@Component({
  selector: 'app-forms-perfil',
  templateUrl: './forms-perfil.component.html',
  styleUrls: ['./forms-perfil.component.scss'],
  providers: [ValidationFormsService]
})
export class FormsPerfilComponent implements OnInit {

  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  search:string = "";
  dataPerfil:any = []; page: number = 1; tableSize: number = 10; count: number = 0;
  urlSet: any;
  urlGet: any = '';
  constructor(private spinnerService: SpinnerService, public validationFormsService: ValidationFormsService,
    private localServi: LocalProyectService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit(): void {

  }

  public visible = false;
  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  onSubmit() {
    if (this.onValidate()) {
      this.crearPerfil();
      //this.rutas.navigate(['./']);
    }
  }

  onValidate() {
    this.submitted = true;
    // stop here if form is invalid
    return this.simpleForm.status === "VALID";
  }

  crearPerfil() {
    let usedFirstName = this.simpleForm.value.firstName.split(" ")[0];
    let usedLastName = this.simpleForm.value.lastName.split(" ")[0];
    let datos = {
      'firstName': this.simpleForm.value.firstName.toUpperCase(),
      'lastName': this.simpleForm.value.lastName.toUpperCase(),
      'usedFirstName': usedFirstName.toUpperCase(),
      'usedLastName': usedLastName.toUpperCase(),
      'imagen':this.urlSet,
      'email':this.simpleForm.value.email,
      'territorialDivision':this.simpleForm.value.territorialDivision,
    }
    console.log(datos)
  }

  eliminar(_id: any) {}
  
  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        firstName: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        lastName: [
          "",
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        email: ["", [Validators.required, Validators.email]],
        territorialDivision:["", [Validators.required]],
        dignidad:["", [Validators.required]]
      }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  dataPaginate(event:Event){
  }

  camposInputEditar(categorianame: any, id: any) {
    // this.simpleForm.get('category')?.setValue(categorianame);
    // this.categoria_id = id;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  public onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let tipoImagen = event.target.files[0].type;
      if (tipoImagen == "image/jpeg" || tipoImagen == "image/png" || tipoImagen == "image/svg") {
        var reader = new FileReader();
        let base64String;
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.urlGet = event.target.result;
          base64String = event.target.result.replace("data:", "")
            .replace(/^.+,/, "");
          this.urlSet = base64String;
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡No es una Imagen..!',
          text: 'Elija una imagen.'
        })
      }
    }
  }

}
