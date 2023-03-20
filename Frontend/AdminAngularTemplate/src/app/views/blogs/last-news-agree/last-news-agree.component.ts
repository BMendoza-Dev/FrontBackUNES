import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { ScripServiceService } from 'src/app/servicios/scrip-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-last-news-agree',
  templateUrl: './last-news-agree.component.html',
  styleUrls: ['./last-news-agree.component.scss']
})
export class LastNewsAgreeComponent {
  visible: boolean = false;
  visibleDeny: boolean = false;
  customStylesValidated2: boolean = false;
  motivoTitulo: string  = '';
  motivoText: string = '';
  search = "";
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  blogFilter: any = [];
  @Input() nameCat:any; _categoria_id:any=0;
  constructor(private localServi: LocalProyectService,private scriptService: ScripServiceService, private service: BlogServicesService, private sanitizer: DomSanitizer) {
    localServi.$emitter5.subscribe((data:any) => {
      this._categoria_id=data
      this.blogList();
    });
  }

  listBlog: any; urlGet: SafeUrl; blogtitulo: string; blogdescripcion: string; blogcontenido: SafeHtml; fecha: any;
  categoria: string = '';
  idBlog: number;

  ngOnInit(): void {
    this.blogList();
    
  }


  blogList() {
    this.service.listarBlog(this._categoria_id).then((data: any) => {
      
      if(data.length >0){
        this.listBlog = data.map((value: any) => ({
          _id: value.id,
          _blogtitulo: value.blogtitulo,
          _blogdescripcion: value.blogdescripcion,
          _blogcontenido: value.blogcontenido,
          _perfil_id: value.perfil_id,
          _imagen: this.trasformaImagen(value.imagen)
        })); 
      }else{
        this.listBlog = '';
      }
    }, (error) => {
      console.log(error);
    })
  }

  ejercicio1() {
    var nacimiento: any = new Date(2001, 3, 9);
    var hoy: any = new Date()

    var tiempoPasado = hoy - nacimiento
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    //calculo 
    var anos = Math.floor(tiempoPasado / years);

    tiempoPasado = tiempoPasado - (anos * years);
    var meses = Math.floor(tiempoPasado / months)

    tiempoPasado = tiempoPasado - (meses * months);
    var dias = Math.floor(tiempoPasado / days)

    tiempoPasado = tiempoPasado - (dias * days);
    var horas = Math.floor(tiempoPasado / hours)

    tiempoPasado = tiempoPasado - (horas * hours);
    var minutos = Math.floor(tiempoPasado / mins)

    tiempoPasado = tiempoPasado - (minutos * mins);
    var segundos = Math.floor(tiempoPasado / segs)

    console.log(`Han pasado ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, y ${minutos} minutos desde que naciste. Ya chocheas...!!`)
  }
  trasformaImagen(img: any) {
    let objectURL = 'data:image/jpeg;base64,' + img;
    //this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    return img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  dataPaginate(_event: any) {
    this.blogFilter = [];
    if (this.search == "") {

    } else {

      for (const x of this.listBlog) {
        
        if (x._blogtitulo.indexOf(this.search) > -1) {
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
    this.service.getBlog(id).then((data: any) => {
      this.categoria = data[0].categoria;
      this.blogtitulo = data[0].blogtitulo;
      this.blogdescripcion = data[0].blogdescripcion;
      this.blogcontenido = this.sanitizer.bypassSecurityTrustHtml(data[0].blogcontenido);
      this.urlGet = this.trasformaImagen(data[0].imagen);
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
      
    }, (error) => {
      console.log(error);
    })
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleLiveDemoDeny(){
    this.visibleDeny = !this.visibleDeny;
    this.customStylesValidated2 = false;
  }

  handleLiveDemoChangeDeny(event:any){
    this.visibleDeny = event;
  }
  alert(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
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
  
  blogAprobarDeny(value:number){
    let datos = {
      'id': this.idBlog,
      'aprobado': value,
      'description': this.motivoText,
      'titulo': this.motivoTitulo
    }
    
    this.service.AprobarBlogEnUltimaNoticias(datos).then(() => {
      
      if(value == 0){
        this.toggleLiveDemoDeny();
      }else{
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

  denyBlog(){
    if(this.motivoTitulo != '' && this.motivoText != '' ){
      this.blogAprobarDeny(0);
      
    }else{
      
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
