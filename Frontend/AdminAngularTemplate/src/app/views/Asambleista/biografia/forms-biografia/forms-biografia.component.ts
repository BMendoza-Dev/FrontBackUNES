import { Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '../../../../ckeditor 5/ckBuildD/build/ckeditor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-biografia',
  templateUrl: './forms-biografia.component.html',
  styleUrls: ['./forms-biografia.component.scss']
})
export class FormsBiografiaComponent implements OnInit {

  //@ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  constructor(public rutas: Router,
    private spinnerService: SpinnerService, private adminService: AdministradorService, private sanitizer: DomSanitizer) {
  }

  urlfb: any = "";
  urltw: any = "";
  urlit: any = "";
  urlttk: any = "";
  datosAsambleistas: any; keyword = 'name'; dataAsmbleista: any = []; idAsambleiApiAsam: any = localStorage.getItem('idAsambPerf'); asamPerfil: boolean = false; idPosicionDataAsam: any;

  urlSet: any;
  urlGet: any = '';
  public Editor: any = ClassicEditor; datos: string = ''; binImg: any; urlImgAssa: any;
  habilitarCampos: boolean = false; notFound: string = "No se encuentra asambleista";


  config = {
    toolbar: [
      'heading',
      '|',
      'fontSize',
      'fontFamily',
      '|',
      'bold',
      'italic',
      'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo',],
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
      ]
    },
    lenguage: 'es'
  }

  ngOnInit() {
    //this.spinner.show('sample');
    this.cargarBiografiaAsam();
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

  updateBiografia() {
    Swal.fire({
      title: 'Estás seguro?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Actualizar',
      denyButtonText: `No actualizar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        let data = {
          'id': this.idAsambleiApiAsam,
          'perfil': this.datos,
          'urlfb': this.urlfb,
          'urltw': this.urltw,
          'urlit': this.urlit,
          'urlttk': this.urlttk,
          'binImg': this.urlSet
        };

        this.adminService.updateBiografia(data).then(() => {
          Swal.fire('Guardado!', '', 'success')
          this.spinnerService.detenerSpinner();
        }).catch(error => {
          if (error.status) { this.rutas.navigate(['/login']); }
          this.spinnerService.detenerSpinner();
          
        })

      } else if (result.isDenied) {
        Swal.fire('No se a guardado la cuenta', '', 'info')
      }
    }) //Actualizar la biografia de los asambleistas

  }



  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  cargarBiografiaAsam() {
    this.spinnerService.llamarSpinner();
    this.adminService.cargarBiografia(this.idAsambleiApiAsam).then(data => {
      let biografia: any = data

      if (biografia.error == "404") {
        this.adminService.getImg(this.idAsambleiApiAsam).subscribe((data: any) => {
          let img = data
          this.urlSet = img[0]['imagen'];

          this.trasformaImagen(img[0]['imagen']);
        });
      } else {
        this.trasformaImagen(biografia['image'][0].imagen);

        this.datos = biografia.perfil;

        this.urlfb = biografia.urlfb; this.urlit = biografia.urlit; this.urlttk = biografia.urlttk; this.urltw = biografia.urltw; this.urlSet = biografia['image'][0].imagen;
      }
      setTimeout(() => {
        this.spinnerService.detenerSpinner();
      }, 4000);
    }).catch(error => {
      if (error.status) { this.rutas.navigate(['/login']); }
      this.spinnerService.detenerSpinner();
      
    })
  }


  onClear() {
    this.idAsambleiApiAsam = "";
  }

  async redSocial(URL: any) {
    if (URL == "facebook") {
      if (this.urlfb == null) {
        this.urlfb = "";
      }
      const { value: url } = await Swal.fire({
        input: 'url',
        inputLabel: 'URL',
        inputValue: this.urlfb,
        inputPlaceholder: 'URL de perfil de ' + URL,
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      })
      if (url) {
        this.urlfb = url
        if (this.urlfb) {
          Swal.fire(`Ingeso la URL: ${this.urlfb}`)
        }
      }
    } else if (URL == "twitter") {
      if (this.urltw == null) {
        this.urltw = "";
      }
      const { value: url } = await Swal.fire({
        input: 'url',
        inputLabel: 'URL',
        inputValue: this.urltw,
        inputPlaceholder: 'URL de perfil de ' + URL,
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      })
      if (url) {
        this.urltw = url
        if (this.urltw) {
          Swal.fire(`Ingeso la URL: ${this.urltw}`)
        }
      }
    } else if (URL == "instagram") {
      if (this.urlit == null) {
        this.urlit = "";
      }
      const { value: url } = await Swal.fire({
        input: 'url',
        inputLabel: 'URL',
        inputValue: this.urlit,
        inputPlaceholder: 'URL de perfil de ' + URL,
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      })
      if (url) {
        this.urlit = url
        if (this.urlit) {

          Swal.fire(`Ingeso la URL: ${this.urlit}`)
        }
      }
    } else {
      if (this.urlttk == null) {
        this.urlttk = "";
      }
      const { value: url } = await Swal.fire({
        input: 'url',
        inputLabel: 'URL',
        inputValue: this.urlttk,
        inputPlaceholder: 'URL de perfil de ' + URL,
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      })
      if (url) {
        this.urlttk = url
        if (this.urlttk) {

          Swal.fire(`Ingeso la URL: ${this.urlttk}`)
        }
      }
    }
  }

}
