import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http:HttpClient) { }

  cargarCuentaAsambleista(){
    let  url = 'http://127.0.0.1:8000/api/Asambleistas';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer "+ token
    });
    debugger
    return new Promise ((resolve, reject) => {
      this.http.get(url, {headers: httpheaders}).subscribe(res => {
        resolve(res);{
        }
      }, error => {
        reject(error);
      });
    });
  }

  cargarPerfiles(){
    let  url = 'http://127.0.0.1:8000/api/ListarPerfiles';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer "+ token
    });
    return new Promise ((resolve, reject) => {
      this.http.get(url,{headers: httpheaders}).subscribe(res => {
        resolve(res);{
        }
      }, error => {
        reject(error);
      });
    });
  }

  /*verImagen(){
    let urlApp = 'http://apiapp.asambleanacional.gob.ec';
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/jason',
      'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2ODU2NkQ1OTcxMzM3NDM2NzczOTdBMjQ0MzI2NDYyOTQ4NDA0RDYzNTE2NjU0NkE1NzZFNUE3MjM0NzUzNzc4MjE0MTI1NDQyQTQ3MkQ0QjYxNTA2NDUyNjc1NTZCNTg3MDMyNzMzNTc2Mzg3OTJGNDIzRjQ1Mjg0ODJCNEQ2MiIsInNjb3BlIjoicmVhZCIsImlhdCI6MTY3NDYyNjczNywiZXhwIjoxNjc0NjI4NTM3fQ.haWI6vfcO9but9oETAzaj_Na1JwcUOuYI8n0-Iu7L9WA8LsvRE7ENNJJZQh_kp9oPaet3eX0gJvj_JrMHHx5yg',
      'responseType' : 'blob'
    });
    
    return this.http.get(urlApp + 'assemblyMembersResource/getPhoto/2308', {headers: httpheaders});
    
    //return this.http.get(urlApp + '/periodsResource/territorialDivision/', {headers: httpheaders});
  }*/
}
