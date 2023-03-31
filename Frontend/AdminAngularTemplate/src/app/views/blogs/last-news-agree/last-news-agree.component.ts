import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ScripServiceService } from 'src/app/servicios/scrip-service.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-last-news-agree',
  templateUrl: './last-news-agree.component.html',
  styleUrls: ['./last-news-agree.component.scss']
})
export class LastNewsAgreeComponent implements OnInit {
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
  constructor(private spinnerService: SpinnerService, private scriptService: ScripServiceService, private service: BlogServicesService, private sanitizer: DomSanitizer) {
    
  }

  listBlog: any; urlGet: SafeUrl; blogtitulo: string; blogdescripcion: string; blogcontenido: SafeHtml; fecha: any;
  categoria: string = '';
  idBlog: number;

  ngOnInit(): void {
    this.listarCategoriasBlog();
    this.blogList();
  }

  listarCategoriasBlog(){
    this.service.ListarCateBlog().then((data:any) =>{
      this.listCateg = data;
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
    this._categoria_id=value;
    this.blogList();
  }


  blogList() {

    this.spinnerService.llamarSpinner();
    this.service.listarBlog(this._categoria_id).then((data: any) => {

      if (data.length > 0) {
        this.listBlog = data.map((value: any) => ({
          _id: value.id,
          _blogtitulo: value.blogtitulo,
          _blogdescripcion: value.blogdescripcion,
          _blogcontenido: value.blogcontenido,
          _perfil_id: value.perfil_id,
          _imagen: this.trasformaImagen(value.imagen)
        }));
      } else {
        this.listBlog = '';
      }
      this.spinnerService.detenerSpinner();
    }).catch((error) => {
      this.spinnerService.detenerSpinner();
      console.log(error);
    })
  }

  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    //this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    return img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  dataPaginate(_event: any) {
    this.page = 1;
    this.blogFilter = [];
    if (this.search == "") {

    } else {

      for (const x of this.listBlog) {

        if (x._blogtitulo.toUpperCase().indexOf(this.search.toUpperCase()) > -1) {
          this.blogFilter.push(x);

        };
      };
      this.blogFilter
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  blogGet(id: any) {

    this.idBlog = id;
    this.spinnerService.llamarSpinner()
    this.service.getBlog(id).then((data: any) => {
      this.categoria = data[0].categoria;
      this.blogtitulo = data[0].blogtitulo;
      this.blogdescripcion = data[0].blogdescripcion;
      this.blogcontenido = this.sanitizer.bypassSecurityTrustHtml(data[0].blogcontenido);
      this.urlGet = this.trasformaImagen(data[0].imagen);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => { this.spinnerService.detenerSpinner(); console.log(error) });
      this.spinnerService.detenerSpinner();
      this.toggleLiveDemo();
    }).catch((error) => {
      this.spinnerService.detenerSpinner();
      console.log(error);
    })
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
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
      title: 'Cuenta actualizada!'
    })
  }

  blogAprobarDeny(value: number) {
    this.spinnerService.llamarSpinner();
    let datos = {
      'id': this.idBlog,
      'aprobado': value,
      'description': this.motivoText,
      'titulo': this.motivoTitulo
    }

    this.service.AprobarBlogEnUltimaNoticias(datos).then(() => {

      if (value == 0) {
        this.toggleLiveDemoDeny();
      } else {
        this.toggleLiveDemo();
      }
      this.clear();
      this.alert();
      this.blogList();
    }).catch(error => {
      console.log(error);
    })
  }

  aprobarUltNotc(value: number) {
    
    if (value == 0) {
      this.toggleLiveDemo();
      this.toggleLiveDemoDeny();
    } else {
      Swal.fire({
        title: 'Estas seguro?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Aprobar',
        denyButtonText: 'Cancelar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.blogAprobarDeny(value)
        }
      })
    }
  }

  accept() {
    let value: number = 1
    this.aprobarUltNotc(value);
  }

  deny() {
    let value: number = 0;
    this.aprobarUltNotc(value);
  }

  denyBlog() {
    if (this.motivoTitulo != '' && this.motivoText != '') {
      this.blogAprobarDeny(0);

    } else {

    }

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
  }

  onSubmit2() {
    this.customStylesValidated2 = true;
    console.log('Submit... 2');
  }



}
