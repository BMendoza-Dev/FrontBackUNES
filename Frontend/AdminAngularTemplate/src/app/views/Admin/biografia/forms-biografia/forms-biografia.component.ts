import { Component, OnChanges, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';
import * as ClassicEditor from './../ckeditBuild/build/ckeditor';
@Component({
  selector: 'app-forms-biografia',
  templateUrl: './forms-biografia.component.html',
  styleUrls: ['./forms-biografia.component.scss']
})
export class FormsBiografiaComponent implements OnInit {

  
  constructor() {
  }

  url: any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'; ClaseFoto: string = ""; foto = "";
  public Editor = ClassicEditor; datos:string = "";

  

  habilitarCampos: boolean = false; notFound: string = "No se encuentra asambleista";

  ngOnInit() {

  }

  habilitar() {
    this.habilitarCampos = !this.habilitarCampos
  }

  public onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {

      let tipoImagen = event.target.files[0].type;
      if (tipoImagen == "image/jpeg" || tipoImagen == "image/png" || tipoImagen == "image/svg") {
        this.foto = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }

      } else {
        Swal.fire({
          icon: 'error',
          title: '¡No es una Imagen..!',
          text: 'Elija una imagen.'
        })
        this.foto = "";
      }
      this.ClaseFoto = "";
    }
  }
}
