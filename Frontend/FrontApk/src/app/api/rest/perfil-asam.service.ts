import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PerfilAsamService {

  urlApp;
  constructor(private httpCliente:HttpClient) {
    this.urlApp = 'http://127.0.0.1:8000/api/';
   }

   getAssamblyList() {
      let  url = this.urlApp+'ListarPerfiles';
      let token = "96|lqphkHZYwPz3hgz5E9NCvpXBH5ihGDNN10hFfhFI";
      const httpheaders = new HttpHeaders({
        'Authorization': "Bearer "+ token
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

