import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent {
  simpleForm!: FormGroup;
  submitted = false;
  simpleFormEdit!: FormGroup;
  submittedEdit = false;
  formErrors: any;
  formControls!: string[];
  search = ""; page: number = 1; tableSize: number = 10; count: number = 0;
  dataCat: any = []; catFilter: any = [];
  constructor(private spinnerService: SpinnerService, private service: BlogServicesService, private serviceAdmin: AdministradorService,
    public validationFormsService: ValidationFormsService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
    this.createFormEdit();
    this.cargarCatBlog();
  }

  cargarCatBlog() {
    this.spinnerService.llamarSpinner();
    this.service.ListarCateBlog().then((_cat: any) => {
      this.dataCat = _cat;
      this.spinnerService.detenerSpinner();
    }).catch(error => {
      this.spinnerService.detenerSpinner();
     
    })
  }

  guardarCatBlog() {
    this.spinnerService.llamarSpinner();
    let formCatBlog = {
      'categorianame': this.simpleForm.value.category,
    }

    this.serviceAdmin.CreateCategoria(formCatBlog).then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Categoría actualizada!'
      })
      this.submitted = false;
      this.simpleForm.reset();
      this.onReset2();
    }).catch(error => {
      this.spinnerService.detenerSpinner();
     
    })
  }

  onReset2() {
    this.cargarCatBlog();
    Swal.fire('Guardado!', '', 'success')
  }

  crearCatBlog() {
    Swal.fire({
      title: 'Esta seguro que desea crear una categoría?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Crear',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.guardarCatBlog();

      } else if (result.isDenied) {
        Swal.fire('No se a guardado la categoría', '', 'info')
      }
    })
  }


  categoria_id: any;
  camposInputEditar(categorianame: any, id: any) {
    this.simpleFormEdit.get('category')?.setValue(categorianame);
    this.categoria_id = id;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  dataPaginate(_event: any) {
    this.page = 1;
  }

  public visible = false;
  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
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
      this.crearCatBlog();
    }
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        category: [
          "",
          [
            Validators.required,
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ]
      }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  updateCatBlog() {
    this.spinnerService.llamarSpinner();
    let formCatBlog = {
      'categoria_id': this.categoria_id,
      'categorianame': this.simpleFormEdit.value.category,
    }

    this.serviceAdmin.EditCategoria(formCatBlog).then(() => {
      this.submittedEdit = false;
      this.simpleFormEdit.reset();
      this.visible = !this.visible;
      this.onReset2();
    })
  }

  editCat() {
    Swal.fire({
      title: 'Esta seguro que desea editar?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Editar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateCatBlog();
      } else if (result.isDenied) {
        Swal.fire('No se a guardado la edición', '', 'info')
      }
    })
  }

  onValidateEdit() {
    this.submittedEdit = true;
    // stop here if form is invalid
    return this.simpleFormEdit.status === "VALID";
  }

  onSubmitEdit() {
    console.warn(this.onValidateEdit(), this.simpleFormEdit.value);

    if (this.onValidateEdit()) {
      // TODO: Submit form value
      console.warn(this.simpleFormEdit.value);
      this.editCat();
      //this.rutas.navigate(['./']);
    }
  }

  createFormEdit() {
    this.simpleFormEdit = this.formBuilder.group(
      {
        category: [
          "",
          [
            Validators.required,
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ]
      }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  eliminar(_id: any) {

    Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        this.serviceAdmin.EliminadoLogicoCategoria(_id).then(() => {
          Swal.fire(
            'Eliminado!',
            'Su blog ha sido eliminado.',
            'success'
          )
          this.cargarCatBlog();
        })
      }
    })

  }
}
