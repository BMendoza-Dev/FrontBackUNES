import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  cargarCuentaAsambleista() {
    let url = 'https://rc5appmobile.tech/api/Asambleistas';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
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

  cargarCuentaAsistente() {
    let url = 'https://rc5appmobile.tech/api/Asistentes';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
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

  cargarCuentaAdmin() {
    let url = 'https://rc5appmobile.tech/api/Admin';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
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

  cargarPerfiles() {
    let url = 'https://rc5appmobile.tech/api/ListarPerfiles';
    let token = localStorage.getItem("token");
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
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

  registerCuentaAsambleistaAsistente(_data: any) {
    let url = 'https://rc5appmobile.tech/api/Register';
    let token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append('name', _data.name);
    formData.append('email', _data.email);
    formData.append('password', _data.password);
    formData.append('rol_id', _data.rol_id);
    formData.append('perfil_id', _data.perfil_id);
    formData.append('estado', _data.estado);
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
    });

    return new Promise((resolve, reject) => {
      this.http.post(url, formData, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  updateAsamAsisCuentas(_data: any) {
    let url = 'https://rc5appmobile.tech/api/Update';
    let token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append('name', _data.name);
    formData.append('email', _data.email);
    formData.append('password', _data.password);
    formData.append('perfil_id', _data.perfil_id);
    formData.append('estado', _data.estado);
    formData.append('id', _data.id);

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
    });

    return new Promise((resolve, reject) => {
      this.http.post(url, formData, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  getImg(_id:any) {
    let url = 'https://rc5appmobile.tech/api/ObtenerImagen?id=' + _id;
    let token = localStorage.getItem("token");

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
    });
    return this.http.get(url, { headers: httpheaders });
  }


  
  updateBiografia(_data: any) {
    let url = 'https://rc5appmobile.tech/api/RegistrarBiografia';
    
    let token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append('urlfb', _data.urlfb);
    formData.append('urltw', _data.urltw);
    formData.append('urlit', _data.urlit);
    formData.append('urlttk', _data.urlttk);
    formData.append('perfil', _data.perfil);
    formData.append('id', _data.id);
    formData.append('imagen', _data.binImg);
    
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
    });
    return new Promise((resolve, reject) => {
      this.http.post(url, formData, {headers: httpheaders}).subscribe(res => {
        
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  cargarBiografia(_id: any){
    let url = 'https://rc5appmobile.tech/api/ObtenerBiografia?id='+_id;
    let token = localStorage.getItem("token");
    
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + token
    });

    return new Promise((resolve, reject) => {
      this.http.get(url, {headers: httpheaders}).subscribe(res => {
        
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }
  
}
