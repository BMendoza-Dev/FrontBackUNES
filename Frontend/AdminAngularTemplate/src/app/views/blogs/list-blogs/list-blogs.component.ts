import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {

  constructor(private service:BlogServicesService,private sanitizer: DomSanitizer){

  }

  listBlog:any; urlGet: any; blogtitulo:any; blogdescripcion:any; blogcontenido:any;fecha:any;
  formList:boolean = false
  ngOnInit(): void {
    this.blogList();
  }

  blogList(){
    this.service.listarBlog().then((data:any)=>{
      this.listBlog = data; debugger
      //this.blogtitulo = data.blogtitulo;
      //this.blogdescripcion = data.blogdescripcion;
      //this.blogcontenido = data.blogcontenido;
      //this.fecha = data.updated_at
      //this.ejercicio1();
      //this.trasformaImagen(data.imagen)
    },(error) =>{
      console.log(error);
    })
  }

  ejercicio1(){
    var nacimiento:any = new Date(2001, 3, 9);
    var hoy:any = new Date()

var tiempoPasado= hoy - nacimiento
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
    this.urlGet = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  onTableDataChange(event: any) {
    //this.page = event;
  }
}
