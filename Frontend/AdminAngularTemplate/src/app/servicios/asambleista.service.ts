import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AsambleistaService {
  urlAWS: any;
  urlLocal: string;
  token:any;
   cry:any = localStorage.getItem("token");
   key = "GAMABAML"
  constructor(private http: HttpClient) { 
    this.urlLocal = "http://127.0.0.1:8000/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
    this.token = CryptoJS.AES.decrypt(this.cry.trim(),this.key.trim()).toString(CryptoJS.enc.Utf8);
  }

  CrearBlog(_data: any) {
    let url = this.urlAWS + 'CrearBlog?categorie_id='+_data.categorie_id
    +'perfils_id'+_data.perfils_id
    +'blogtitulo'+_data.blogtitulo
    +'blogdescripcion'+_data.blogdescripcion
    +'blogcontenido'+_data.blogcontenido
    +'ultimanoticia'+_data.ultimanoticia
    +'imagen'+_data.imagen
    +'blog_id'+_data.blog_id; //se manda un id para hacer la Edición
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
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
