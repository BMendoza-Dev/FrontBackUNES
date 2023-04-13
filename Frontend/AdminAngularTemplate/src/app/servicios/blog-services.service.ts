import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { catchError, map, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {
  urlLocal: string;
  urlAWS: string;
  url:string;
  constructor(private http: HttpClient) {
    this.urlLocal = "http://localhost/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
    this.url = this.urlLocal
  }

  crear_updateBlog(_datos: any) {
    let url = this.url + 'CrearBlog'

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });

    let formData = new FormData();
    formData.append('categorie_id', _datos.categorie_id);
    formData.append('blogtitulo', _datos.blogtitulo);
    formData.append('blogdescripcion', _datos.blogdescripcion);
    formData.append('blogcontenido', _datos.blogcontenido);
    formData.append('ultimanoticia', _datos.ultimanoticia);
    formData.append('imagen', _datos.imagen);
    formData.append('blog_id', _datos.blog_id);

    return new Promise((resolve, reject) => {
      this.http.post(url, formData, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  ListarCateBlog() {
    let url = this.url + 'ListarCateBlog'

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.get(url, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  listarBlog(_cate_id:any) {
    let url = this.url + 'ListarBlogsPorAprobar?cate_id='+_cate_id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  getBlog(id: any) {
    let url = this.url + 'ObtenerBlog?id=' + id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  AprobarBlogEnUltimaNoticias(_datos: any) {

    let url = this.url + 'AprobarBlogEnUltimaNoticias'

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });

    let formData = new FormData();
    formData.append('id', _datos.id);
    formData.append('aprobado', _datos.aprobado);
    formData.append('description', _datos.description);
    formData.append('titulo', _datos.titulo);
    formData.append('updated_at', _datos.updated_at)
    return new Promise((resolve, reject) => {
      this.http.post(url, formData, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  ObtenerBlogPorPerfil(_cate_id:any){
    let url = this.url + 'ObtenerBlogPorPerfil?cate_id='+_cate_id;

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }
}
