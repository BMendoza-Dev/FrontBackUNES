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
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-creat-editorial',
  templateUrl: './creat-editorial.component.html',
  styleUrls: ['./creat-editorial.component.scss']
})
export class CreatEditorialComponent {
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
  categoriaId: any;
  visibleNote = false;
  listBlog:any; urlGet: SafeUrl; blogtitulo: string; blogdescripcion: string; blogcontenido: SafeHtml; fecha: any;
  categoria: string = '';
  idBlog: number;
  actNotas:boolean = false;
  tituloNotas: any;
  descriptionNotas: any;


  allComplete: boolean = false;
  allCompleteBlog: boolean = false;
  chekcList: any;

  updateAllCompleteBlog(){
    
    this.allCompleteBlog = this.chekcList != null && this.chekcList.every((t:any) => t.completed);
    
  }
  someCompleteBlog(): boolean {
    
    if (this.chekcList == null) {
      return false;
    }
    let dato = this.chekcList.filter((t:any) => t.completed).length > 0 && !this.allCompleteBlog;

    return dato
  }
  setAllBlog(completed: boolean) {
    
    this.allCompleteBlog = completed;
    if (this.chekcList == null) {
      return;
    }
    this.chekcList.forEach((t:any) => (t.completed = completed));
    
  }


  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
  
    moveItemInArray(this.chekcList, event.previousIndex, event.currentIndex);
    console.log(this.chekcList)
  }



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,public rutas: Router,
    private localServi: LocalProyectService,private spinnerService: SpinnerService, private scriptService: ScripServiceService,
    private service: BlogServicesService, private sanitizer: DomSanitizer) {}


    ngOnInit(): void {
      this.listarCategoriasBlog();
      this.ObtenerBlogPorPerfil();
    }
  
    listarCategoriasBlog() {
      this.service.ListarCateBlog().then((data: any) => {
        this.listCateg = data;
        
      }).catch(error => {
        this.spinnerService.detenerSpinner();
        if(error.status){this.rutas.navigate(['/login']);}
        console.log(error)
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
        console.log(data)
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
            completed: false,
            //_imagen: this.trasformaImagen(value.imagen)
            _created_at:moment(value.created_at).locale('es').fromNow() 
          }));

          this.chekcList=this.listBlog
        } else {
          this.listBlog = [];
        }
        this.spinnerService.detenerSpinner();
        
      }).catch(error =>{
        this.spinnerService.detenerSpinner();
        if(error.status){this.rutas.navigate(['/login']);}
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
        
        this.datosEdit = {
          'id': this.idBlog,
          'categoria': this.categoriaId,
          'blogtitulo': this.blogtitulo,
          'blogdescripcion': this.blogdescripcion,
          'blogcontenido': data[0].blogcontenido,
          'urlSet': data[0].imagen,
          'urlGet':this.urlGet,
          'ultNoticia': data[0].ultimanoticia
        }
        this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
          .then(data => {
            console.log('script loaded ', data);
          }).catch(error => 
            console.log(error));
        this.spinnerService.detenerSpinner();
        this.toggleLiveDemo();
      }).catch((error) => {
        this.spinnerService.detenerSpinner();
        if(error.status){this.rutas.navigate(['/login']);}
        console.log(error);
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
      console.log('Submit... 2');
    }
  
    toggleCollapse() {
      this.visibleNote = !this.visibleNote;
    }
}
