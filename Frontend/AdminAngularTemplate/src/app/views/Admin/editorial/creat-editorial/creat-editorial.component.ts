import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import moment from 'moment';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ScripServiceService } from 'src/app/servicios/scrip-service.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-creat-editorial',
  templateUrl: './creat-editorial.component.html',
  styleUrls: ['./creat-editorial.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreatEditorialComponent {
  visible: boolean = false;
  search = "";
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  listCateg: any;
  categorie_id: number = 0;
  categoriaId: any;
  listBlog: any; urlGet: SafeUrl; blogtitulo: string; blogdescripcion: string; blogcontenido: SafeHtml;
  categoria: string = '';
  idBlog: number;
  chekcListOrder: any;
  allCompleteBlog: boolean = false;
  chekcList: any = [];
  isLinear = false;
  pdfs: any[] = [];
  tituloEditorial: string = "";
  @ViewChild('stepper') stepper: MatStepper;
  @Input() datosEdit: any = [];
  @Output() cargarListEditorial = new EventEmitter<void>();
  editrialnum: any;
  idEditorial: any;
  listBlogEditorial: any = [];
  cheklisordenado: any = [];
  constructor(private _formBuilder: FormBuilder, public rutas: Router,
    private spinnerService: SpinnerService, private scriptService: ScripServiceService,
    private service: BlogServicesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.listarCategoriasBlog();
    this.ListarBlogsImportantesSemana();
  }


  updateAllCompleteBlog(completed: any, id: number) {

    this.allCompleteBlog = this.chekcList != null && this.chekcList.every((t: any) => t.completed);
    if (completed == true) {
      const resultado = this.chekcList.filter((objeto: any) => {
        if (objeto._id == id) {
          return objeto
        }
      });
      this.cheklisordenado.push(resultado[0])
    } else {
      const indexAEliminar = this.cheklisordenado.findIndex((objeto: any) => {

        return objeto._id === id;
      });

      if (indexAEliminar > -1) {
        this.cheklisordenado.splice(indexAEliminar, 1);
      }

    }

  }
  someCompleteBlog(): boolean {
    if (this.chekcList == null) {
      return false;
    }
    let dato = this.chekcList.filter((t: any) => t.completed).length > 0 && !this.allCompleteBlog;
    return dato
  }
  setAllBlog(completed: boolean) {

    this.allCompleteBlog = completed;
    if (this.chekcList == null) {

      return;
    }
    this.chekcList.forEach((t: any) => (t.completed = completed));

    if (completed == true) {
      this.cheklisordenado = [...this.chekcList]
    } else {
      this.cheklisordenado = [];
    }

  }

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.cheklisordenado, event.previousIndex, event.currentIndex);

  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  listarCategoriasBlog() {
    this.service.ListarCateBlog().then((data: any) => {
      this.listCateg = data;
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      if (error.status) { this.rutas.navigate(['/login']); }
      
    })
  }

  ListarBlogsImportantesSemana() {
    this.spinnerService.llamarSpinner();
    this.service.ListarBlogsImportantesSemana().then((data: any) => {
      if (data.length > 0) {
        this.listBlog = data.map((value: any) => ({
          _id: value.id,
          _blogtitulo: value.blogtitulo,
          _blogdescripcion: value.blogdescripcion,
          _blogcontenido: value.blogcontenido,
          _categorianame: value.categorianame,
          completed: false,
          _categorie_id: value.categorie_id,
          //_imagen: this.trasformaImagen(value.imagen)
          _created_at: moment(value.created_at).locale('es').fromNow()
        }));
        if (this.datosEdit.length != 0) {
          this.spinnerService.llamarSpinner();
          this.tituloEditorial = this.datosEdit.editorialname;
          this.editrialnum = this.datosEdit.editrialnum;
          this.idEditorial = this.datosEdit.id;
          this.listBlogEditorial = this.datosEdit.blogs.map((value: any) => ({
            _id: value.id,
          }));

          this.listBlogEditorial.forEach((editorial: any) => {
            const index = this.listBlog.findIndex((blog: any) => blog._id === editorial._id);
            if (index !== -1) {
              const blog = this.listBlog[index];
              blog.completed = true;
              this.cheklisordenado.push(blog);
            }
          });

        }

        if (this.listBlog.length === this.listBlogEditorial.length) {
          this.allCompleteBlog = true;
        }

        this.chekcList = this.listBlog;

      } else {
        this.listBlog = '';
      }
      this.spinnerService.detenerSpinner();

    }).catch(error => {
      this.spinnerService.detenerSpinner();
      if (error.status) { this.rutas.navigate(['/login']); }
      
    })
  }

  ObtenerBlogPorPerfilEditar() {

    this.chekcList = this.listBlog;
    this.spinnerService.detenerSpinner();
  }


  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    //this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    return img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  dataPaginate(_event: any) {
    this.page = 1;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  blogGet(id: any) {
    this.spinnerService.llamarSpinner();
    this.idBlog = id;
    this.service.getBlog(id).then((data: any) => {
      this.categoria = data[0].categoria;
      this.categoriaId = data[0].categorie_id
      this.blogtitulo = data[0].blogtitulo;
      this.blogdescripcion = data[0].blogdescripcion;
      this.blogcontenido = this.sanitizer.bypassSecurityTrustHtml(data[0].blogcontenido);
      this.urlGet = this.trasformaImagen(data[0].imagen);
      this.transformaPdf(data[0].pdfs);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          
        });

      this.toggleLiveDemo();
      this.spinnerService.detenerSpinner();
    }).catch((error) => {
      this.spinnerService.detenerSpinner();
      if (error.status) { this.rutas.navigate(['/login']); }
      
    })
  }

  transformaPdf(pdf: any) {
    this.pdfs = pdf.map((item: any) => ({
      pdf: 'data:application/pdf;base64,' + item.pdf,
      name: item.name
    }
    ));

  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }


  clear(): void {
    this.scriptService.removeScript('twitter');
  }


  publicar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, publicar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinnerService.llamarSpinner();
        let blogsid = this.cheklisordenado.map((item: any) => {
          return item._id
        });


        if (this.datosEdit.length == 0) {
          this.service.CrearEditorial(blogsid, this.tituloEditorial).then((data) => {
            if (data == '200') {
              this.stepper.reset();
              this.tituloEditorial = '';
              this.ListarBlogsImportantesSemana();
              this.allCompleteBlog = false;
              Swal.fire(
                'Publicado!',
                'La editorial fue publicado.',
                'success'
              )
            }
            this.cheklisordenado = [];

          }).catch(error => {
            this.spinnerService.detenerSpinner();
            if (error.status) { this.rutas.navigate(['/login']); }
            
          })
        } else {
          let datos = {
            blogsid: blogsid,
            editorialname: this.tituloEditorial,
            editrialnum: this.editrialnum,
            id: this.idEditorial
          }

          this.service.EditarEditorial(datos).then((data: any) => {
            this.cargarListEditorial.emit();
          }).catch(error => {
            
          })

        }

      }
    })
  }

  cancelar() {
    this.cargarListEditorial.emit();
  }
}
