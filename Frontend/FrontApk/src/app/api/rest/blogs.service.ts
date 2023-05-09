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

}
