import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';

@Component({
  selector: 'app-select-categoria',
  templateUrl: './select-categoria.component.html',
  styleUrls: ['./select-categoria.component.scss']
})
export class SelectCategoriaComponent implements OnInit{
  listCateg: any;
  categorie_id:any = "Todas las categorías"; nameCat:any;rutaActual:any
  constructor(private route: ActivatedRoute,
    private service: BlogServicesService,private localProyectService: LocalProyectService){
    this.listarCategoriasBlog();
  }

  ngOnInit(): void {
    this.rutaActual = this.route.snapshot.url.join('/');
  }

  listarCategoriasBlog(){
    this.service.ListarCateBlog().then((data:any) =>{
      this.listCateg = data;
    })
  }

  cargarLitBlog(value:any){
    if(value == 'Todas las categorías'){
      value = 0;
      this.nameCat="";
    }else{
    this.listCateg.forEach((element:any) => {
      if(element.id == value){
        this.nameCat = element.categorianame;
      }
    });
  }
    this.localProyectService.emitirEventoCatListBlogs(value);
  }
}
