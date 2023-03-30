import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import * as ClassicEditor from '../../../ckeditor 5/ckBuildD/build/ckeditor';
import Swal from 'sweetalert2';
import { SpinnerService } from 'src/app/servicios/spinner.service';
@Component({
  selector: 'app-form-blogs',
  templateUrl: './form-blogs.component.html',
  styleUrls: ['./form-blogs.component.scss']
})
export class FormBlogsComponent implements OnInit {
  urlGet: any = '';
  urlSet: any = '';

  constructor(private spinnerService:SpinnerService,private service: BlogServicesService) { }

  public datos: any = ""; public Editor: any = ClassicEditor;
  titulo: string; descripcion: string; importante = 0; categorie_id: any = "Seleccione una categoria"; blog_id = "";
  listCateg:any;
  ngOnInit(): void {
    this.listarCategoriasBlog();
  }

  listarCategoriasBlog(){
    this.service.ListarCateBlog().then((data:any) =>{
      this.listCateg = data;
    })
  }

  public config = {
    toolbar: [
      'heading', '|',
      'fontfamily', 'fontsize',
      'alignment',
      'fontColor', 'fontBackgroundColor', '|',
      'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
      'link', '|',
      'bulletedList', '-', 'numberedList', 'todoList', '|',
      'code', 'htmlEmbed', '|',
      'insertTable', '|',
      'imageUpload', 'blockQuote', '|',
      'todoList'
      ,
      'undo', 'redo',],
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
      ]
    }, htmlEmbed: {
      showPreviews: true,
      sanitizeHtml: (inputHtml: any) => {
        const outputHtml = inputHtml;
        return {
          html: outputHtml,
          hasChanged: true
        };
      }
    },
    image: {
      // Configure the available styles.
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],

      // Configure the available image resize options.
      resizeOptions: [
        {
          name: 'resizeImage:original',
          label: 'Original',
          value: null
        },
        {
          name: 'resizeImage:25',
          label: '25%',
          value: '25'
        },
        {
          name: 'resizeImage:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          label: '75%',
          value: '75'
        }
      ],

      // You need to configure the image toolbar, too, so it shows the new style
      // buttons as well as the resize buttons.
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'ImageResize',
        '|',
        'toggleImageCaption',
      ]
    },
    lenguage: 'es'
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


  create() {
    Swal.fire({
      title: 'Esta seguro que desea crear una cuenta?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Crear',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        let data = {
          'categorie_id': this.categorie_id,
          'blogtitulo': this.titulo,
          'blogdescripcion': this.descripcion,
          'blogcontenido': this.datos,
          'ultimanoticia': this.importante,
          'imagen': this.urlSet,
          'blog_id': this.blog_id
        }
        
        this.service.crear_updateBlog(data).then((result: any) => {
          
          this.spinnerService.detenerSpinner();
          
          this.onReset2();
        }).catch((error) => {
          console.log(error);
        })
        
      } else if (result.isDenied) {
        Swal.fire('No se a guardado la cuenta', '', 'info')
      }
    })

  }

  onReset2() {
    Swal.fire('Guardado!', '', 'success')
    this.categorie_id = "Seleccione una categoria"; this.titulo = ""; this.descripcion = ""; this.datos = ""
    this.blog_id = ""; this.check = false; this.urlSet = ""; this.urlGet = ""; this.importante = 0;
  }
  check: boolean = false;
  import() {
    if (this.importante == 0) {
      this.importante = 1
      this.check = true
    } else {
      this.importante = 0
      this.check = false
    }
  }

}
