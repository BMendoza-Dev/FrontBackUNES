import { Component, Input } from '@angular/core';
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
  chekcList: any;
  isLinear = false;
  pdfs: any[] = [];
  tituloEditorial:string="";
  constructor(private _formBuilder: FormBuilder, public rutas: Router,
    private localServi: LocalProyectService, private spinnerService: SpinnerService, private scriptService: ScripServiceService,
    private service: BlogServicesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.listarCategoriasBlog();
    this.ObtenerBlogPorPerfil();
  }


  updateAllCompleteBlog() {
    this.allCompleteBlog = this.chekcList != null && this.chekcList.every((t: any) => t.completed);
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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chekcListOrder, event.previousIndex, event.currentIndex);
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
      console.log(error)
    })
  }

  ObtenerBlogPorPerfil() {
    this.spinnerService.llamarSpinner();
    this.service.ObtenerBlogPorPerfil(0).then((data: any) => {
      console.log(data)
      if (data.length > 0) {
        this.listBlog = data.map((value: any) => ({
          _id: value.id,
          _blogtitulo: value.blogtitulo,
          _blogdescripcion: value.blogdescripcion,
          _blogcontenido: value.blogcontenido,
          _perfil_id: value.perfil_id,
          _categorianame: value['categoria'].categorianame,
          _aprobado: value.aprobado,
          _ultimanoticia: value.ultimanoticia,
          completed: false,
          _categorie_id: value.categorie_id,
          //_imagen: this.trasformaImagen(value.imagen)
          _created_at: moment(value.created_at).locale('es').fromNow()
        }));
        this.chekcList = this.listBlog;
      } else {
        this.listBlog = '';
      }
      this.spinnerService.detenerSpinner();

    }).catch(error => {
      this.spinnerService.detenerSpinner();
      if (error.status) { this.rutas.navigate(['/login']); }
      console.log(error)
    })
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
      console.log(data)
      this.categoria = data[0].categoria;
      this.categoriaId = data[0].categorie_id
      this.blogtitulo = data[0].blogtitulo;
      this.blogdescripcion = data[0].blogdescripcion;
      this.blogcontenido = this.sanitizer.bypassSecurityTrustHtml(data[0].blogcontenido);
      this.urlGet = this.trasformaImagen(data[0].imagen);
      this.transformaPdf(data[0].pdfs);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error =>
          console.log(error));

      this.toggleLiveDemo();
      this.spinnerService.detenerSpinner();
    }).catch((error) => {
      this.spinnerService.detenerSpinner();
      if (error.status) { this.rutas.navigate(['/login']); }
      console.log(error);
    })
  }

  transformaPdf(pdf:any){
    this.pdfs = pdf.map((item:any) => ({
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
    this.categoria = ''
    this.blogtitulo = ''
    this.blogdescripcion = ''
    this.blogcontenido = ''
    this.urlGet = ''
  }

  ordenar(event: any) {
    if (event.previouslySelectedIndex == 0 && event.selectedIndex == 1) {
      this.chekcListOrder = this.chekcList.filter((item: any) => item.completed === true)
    }
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
        let blogsid = this.chekcListOrder.map( (item:any) =>{
          return item._id
        }); debugger
      this.service.CrearEditorial(blogsid,this.tituloEditorial).then((data)=>{
        console.log(`Retorno: ${data}`)
      }).catch(error =>{
        console.log(error);
      })
        Swal.fire(
          'Publicado!',
          'La editorial fue publicada.',
          'success'
        )
      }
    })
  }
}
