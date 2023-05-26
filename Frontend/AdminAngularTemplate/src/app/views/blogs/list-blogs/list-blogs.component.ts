import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import moment from 'moment';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ScripServiceService } from 'src/app/servicios/scrip-service.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {
  visible: boolean = false;
  visibleDeny: boolean = false;
  customStylesValidated2: boolean = false;
  motivoTitulo: string = '';
  motivoText: string = '';
  search = "";
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  blogFilter: any = [];
  @Input() nameCat: any; _categoria_id: any = 0;
  listCateg: any;
  categorie_id: any = "Todas las categorías";
  listblogEdit: boolean = false;
  datosEdit: any;
  pdfs: any[] = [];
  categoriaId: any;
  visibleNote = false;
  listBlog: any; urlGet: SafeUrl; blogtitulo: string; blogdescripcion: string; blogcontenido: SafeHtml; fecha: any;
  categoria: string = '';
  idBlog: number;
  actNotas:boolean = false;
  tituloNotas: any;
  descriptionNotas: any;
  constructor(public rutas: Router,
    private localServi: LocalProyectService,private spinnerService: SpinnerService, private scriptService: ScripServiceService,
    private service: BlogServicesService, private sanitizer: DomSanitizer) {
  }


  ngOnInit(): void {
    this.localServi.dataNotifyIdRechazadoAprobado$.subscribe((data:any) =>{
      
      if(data){
        this.blogGet(data);
      }
    })
    this.listarCategoriasBlog();
    this.ObtenerBlogPorPerfil();
  }

  listarCategoriasBlog() {
    this.service.ListarCateBlog().then((data: any) => {
      this.listCateg = data;
      
    }).catch(error => {
      this.spinnerService.detenerSpinner();
      if(error.status){this.rutas.navigate(['/login']);}
      
    })
  }

  cargarLitBlog(value: any) {
    
    if (value == 'Todas las categorías') {
      value = 0;
      this.nameCat = "";
    } else {
      this.listCateg.forEach((element: any) => {
        if (element.id == value) {
          this.nameCat = element.categorianame;
        }
      });
    }
    this._categoria_id = value;
    this.ObtenerBlogPorPerfil();
  }

  cerrarSuscrib: any
  ObtenerBlogPorPerfil() {
    this.spinnerService.llamarSpinner();
    this.service.ObtenerBlogPorPerfil(this._categoria_id).then((data: any) => {
      
      if (data.length > 0) {
        this.listBlog = data.map((value: any) => ({
          _id: value.id,
          _blogtitulo: value.blogtitulo,
          _blogdescripcion: value.blogdescripcion,
          _blogcontenido: value.blogcontenido,
          _perfil_id: value.perfil_id,
          _categorianame:value['categoria'].categorianame,
          _aprobado:value.aprobado,
          _ultimanoticia:value.ultimanoticia,
          //_imagen: this.trasformaImagen(value.imagen)
          _created_at:moment(value.created_at).locale('es').fromNow() 
        }));
      } else {
        this.listBlog = '';
      }
      this.spinnerService.detenerSpinner();
      
    }).catch(error =>{
      this.spinnerService.detenerSpinner();
      if(error.status){this.rutas.navigate(['/login']);}
      
    })
  }

  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    //this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    return img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  transformaPdf(pdf:any){
    this.pdfs = pdf.map((item:any) => ({
      pdf: 'data:application/pdf;base64,' + item.pdf,
      name: item.name
    }
    ));
    
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
      if((data[0].aprobado == 1 && data[0].ultimanoticia == 1)){
        this.actNotas=false;
      }else if(data[0].aprobado == 0 && data[0].ultimanoticia == 0 && data[0]['nota'].titulo !=undefined){
        this.actNotas=true; 
      }else if(data[0].aprobado == 0 && data[0].ultimanoticia == 1 && data[0]['nota'].titulo !=undefined){
        this.actNotas =false;
      }
      
      if( data[0]['nota'].titulo != undefined){
      this.tituloNotas = data[0]['nota'].titulo;
      this.descriptionNotas = data[0]['nota'].description;
      }else{
        this.tituloNotas = '';
        this.descriptionNotas = '';
      } 

       this.transformaPdf(data[0].pdfs);
      this.datosEdit = {
        'id': this.idBlog,
        'categoria': this.categoriaId,
        'blogtitulo': this.blogtitulo,
        'blogdescripcion': this.blogdescripcion,
        'blogcontenido': data[0].blogcontenido,
        'urlSet': data[0].imagen,
        'urlGet':this.urlGet,
        'ultNoticia': data[0].ultimanoticia,
        'pdfs': this.pdfs
      }
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
        }).catch(error => error
          );
      this.spinnerService.detenerSpinner();
      this.toggleLiveDemo();
    }).catch((error) => {
      this.spinnerService.detenerSpinner();
      if(error.status){this.rutas.navigate(['/login']);}
      
    })
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
    this.visibleNote =false;
    this.localServi.dataNotifyIdRechazadoAprobadoSource.next(null);
  }

  eliminar(){
    
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
        this.service.EliminadoLogicoBlog(this.idBlog).then(()=>{
          Swal.fire(
            'Eliminado!',
            'Su blog ha sido eliminado.',
            'success'
          )
          this.visible = !this.visible;
          this.ObtenerBlogPorPerfil()
        })
      }
    })
    
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleLiveDemoDeny() {
    this.visibleDeny = !this.visibleDeny;
    this.customStylesValidated2 = false;
  }

  handleLiveDemoChangeDeny(event: any) {
    this.visibleDeny = event;
  }
  alert() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Blog actualizado!'
    })
  }

  clear(): void {
    this.scriptService.removeScript('twitter');
    this.categoria = ''
    this.blogtitulo = ''
    this.blogdescripcion = ''
    this.blogcontenido = ''
    this.urlGet = ''
    this.motivoText = ''
    this.motivoTitulo = ''
    this.tituloNotas = ''
    this.descriptionNotas = ''
  }

  onSubmit2() {
    this.customStylesValidated2 = true;
  }

  toggleCollapse() {
    this.visibleNote = !this.visibleNote;
  }
  

}
