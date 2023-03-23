import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
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
  constructor(private service: BlogServicesService, private serviceAdmin:AdministradorService,
    public validationFormsService: ValidationFormsService, private formBuilder: FormBuilder) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
    this.createFormEdit();
    this.cargarCatBlog();
  }

  cargarCatBlog() {
    this.service.ListarCateBlog().then((_cat: any) => {
      this.dataCat = _cat;
      
    }).catch(error => {
      console.log(error)
    })
  }

  guardarCatBlog(){
    let formCatBlog= {
      'categorianame': this.simpleForm.value.category,
    }
    
    this.serviceAdmin.CreateCategoria(formCatBlog).then(()=>{
      this.submitted = false;
      this.simpleForm.reset();
      this.onReset2();
    })
  }

  onReset2(){
    this.cargarCatBlog();
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
        Swal.fire('Guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se a guardado la categoría', '', 'info')
      }
    })
  }


categoria_id:any;
  camposInputEditar(categorianame:any, id:any) {
    this.simpleFormEdit.get('category')?.setValue(categorianame);
    this.categoria_id = id;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  dataPaginate(_event: any) {
    this.page = 1;
    this.catFilter = [];
    if (this.search == "") {
    } else {
      for (const x of this.dataCat) {
        if (x.categorianame.toUpperCase().indexOf(this.search.toUpperCase()) > -1) {
          this.catFilter.push(x);
        };
      };
      this.catFilter
    }
  }

  public visible = false;
  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  clear() { }
  salir() { }
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
      this.salir();
      //this.rutas.navigate(['./']);
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

  updateCatBlog(){
    let formCatBlog= {
      'categoria_id':this.categoria_id,
      'categorianame': this.simpleFormEdit.value.category,
    }
    
    this.serviceAdmin.EditCategoria(formCatBlog).then(()=>{
      this.submittedEdit = false;
      this.simpleFormEdit.reset();
      this.visible=!this.visible;
      this.onReset2();
    })
  }

  editCat(){
    Swal.fire({
      title: 'Esta seguro que desea editar?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Editar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateCatBlog();
        Swal.fire('Guardado!', '', 'success')
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
      this.salir();
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
}
