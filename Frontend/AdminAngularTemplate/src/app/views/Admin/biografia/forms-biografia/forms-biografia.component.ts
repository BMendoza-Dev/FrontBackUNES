import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BinaryToTextEncoding } from 'crypto';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from './../ckeditBuild/build/ckeditor';
@Component({
  selector: 'app-forms-biografia',
  templateUrl: './forms-biografia.component.html',
  styleUrls: ['./forms-biografia.component.scss']
})
export class FormsBiografiaComponent implements OnInit {

  //@ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;

  input: any;
  id: any = 2944;
  urlfb: any;
  urltw: any;
  urlit: any;
  urlttk: any;

  constructor(private adminService: AdministradorService,) {
  }

  url: any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'; ClaseFoto: string = ""; foto = "";
  public Editor = ClassicEditor; datos: string = ""; binImg: any; urlImgAssa: any;
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
        /*reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
          console.log(this.url);
          debugger
        }*/
        let base64String
        reader.onload = (event: any) => {
          base64String = event.target.result.replace("data:", "")
            .replace(/^.+,/, "");
          this.url = base64String;
          debugger
        }
        reader.readAsDataURL(event.target.files[0]);

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


  /*public onSelectFile(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.binImg = event.target.result;
    }
    reader.readAsText(file);
    debugger
  }

  public readFile(event: any) {
    //textarea.textContent = event.target.result;
    this.binImg = "event.target.result";
    debugger
  }*/

  updateBiografia() {
    let data = {
      'id': this.id,
      'perfil': this.datos,
      'urlfb': this.urlfb,
      'urltw': this.urltw,
      'urlit': this.urlit,
      'urlttk': this.urlttk,
      'binImg': this.url
    };
    this.adminService.updateBiografia(data).then(data => {
      data
      debugger
    }).catch(error => {
      console.log(error);
    })
  }

  getAssemblymanPhotoTS() {
    this.adminService.getAssemblymanPhoto().subscribe(data => {
      data
      debugger
    })
  }
}
