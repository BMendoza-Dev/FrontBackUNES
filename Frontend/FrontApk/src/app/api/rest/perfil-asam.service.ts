import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PerfilAsamService {

  urlApp;
  token: string;
  constructor(private httpCliente:HttpClient) {
    this.urlApp = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
   }

   getAssamblyList() {
      let  url = this.urlApp+'ListarPerfiles';
      const httpheaders = new HttpHeaders({
        'Authorization': "Bearer "+ this.token
      });
      
      return new Promise ((resolve, reject) => {
        this.httpCliente.get(url, {headers: httpheaders}).subscribe(res => {
          resolve(res);{
          }
        }, error => {
          reject(error);
        });
      });
    }

    getAssamblyPerfil(id_perfil) {
      let  url = this.urlApp+'ObtenerPerfil?id='+id_perfil;
      
      const httpheaders = new HttpHeaders({
        'Authorization': "Bearer "+ this.token
      });
      
      return new Promise ((resolve, reject) => {
        this.httpCliente.get(url, {headers: httpheaders}).subscribe(res => {
          resolve(res);{
          }
        }, error => {
          reject(error);
        });
      });
    }
  }

