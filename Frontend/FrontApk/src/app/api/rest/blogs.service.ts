import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  urlApp: string;
  urlAWS: string;
  token: string;

  constructor(private httpCliente: HttpClient) { 
    this.urlApp = 'http://127.0.0.1:8000/api/'
    this.urlAWS = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
  }

  ListarBlogUltimaNoticiaApp(){
    let url = this.urlAWS + 'ListarBlogUltimaNoticiaApp';
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ListarEditorialApp(){
    let url = this.urlAWS + 'ListarEditorialApp';
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ObtenerBlogApp(blog_id:any){
    let url = this.urlAWS + 'ObtenerBlogApp?blog_id='+blog_id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ListarPdfBlogApp(blog_id:any){
    let url = this.urlAWS + 'ListarPdfBlogApp?blog_id='+blog_id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ListarBlogsPorEditorialApp(editorial_id:any){
    let url = this.urlAWS + 'ListarBlogsPorEditorialApp?id='+editorial_id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ListarBlogsPorPerfilCategoria(perfil_id,cate_id){
    let url = this.urlAWS + 'ListarBlogsPorPerfilCategoria?perfil_id='+perfil_id+'&cate_id='+cate_id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }

  ListarBlogsAgenda(){
    let url = this.urlAWS + 'ListarBlogsAgenda';
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders });
  }


}
