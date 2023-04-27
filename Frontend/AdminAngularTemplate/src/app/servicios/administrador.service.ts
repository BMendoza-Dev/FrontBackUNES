import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  urlAWS: string;
  urlLocal: string;
  url:string;
  constructor(private http: HttpClient) {
    this.urlLocal = "http://127.0.0.1:8000/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
    this.url = this.urlLocal
  }

  cargarCuentaByRol(slug: any) {
    let url = this.url + 'ListarUserPorRol?slug=' + slug;

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





  cargarPerfiles() {
    let url = this.url + 'ListarPerfiles';

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

  ListarPerfileSiAsambleista() {
    let url = this.url + 'ListarPerfileSiAsambleista';

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

  

  registerCuentaAsambleistaAsistente(_data: any) {
    let url = this.url + 'Register';

    let formData = new FormData();
    formData.append('name', _data.name);
    formData.append('email', _data.email);
    formData.append('password', _data.password);
    formData.append('rol_id', _data.rol_id);
    formData.append('perfil_id', _data.perfil_id);
    formData.append('estado', _data.estado);
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
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
    let url = this.url + 'Update';

    let formData = new FormData();
    formData.append('name', _data.name);
    formData.append('email', _data.email);
    formData.append('password', _data.password);
    formData.append('perfil_id', _data.perfil_id);
    formData.append('estado', _data.estado);
    formData.append('id', _data.id);

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
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

  getImg(_id: any) {
    let url = this.url + 'ObtenerImagen?id=' + _id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
    });

    return this.http.get(url, { headers: httpheaders });
  }



  updateBiografia(_data: any) {
    let url = this.url + 'RegistrarBiografia';
    let formData = new FormData();
    formData.append('urlfb', _data.urlfb);
    formData.append('urltw', _data.urltw);
    formData.append('urlit', _data.urlit);
    formData.append('urlttk', _data.urlttk);
    formData.append('perfil', _data.perfil);
    formData.append('id', _data.id);
    formData.append('imagen', _data.binImg);

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
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

  cargarBiografia(_id: any) {
    let url = this.url + 'ObtenerBiografia?id=' + _id;

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

  cargarCuentaConfig() {
    let url = this.url+'Admin';
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

  CreateCategoria(_data:any){
    let url = this.url+'CreateCategoria';
    let formData = new FormData();
    formData.append('categorianame', _data.categorianame);
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
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

  EditCategoria(_data:any){
    let url = this.url+'EditCategoria';
    let formData = new FormData();
    formData.append('categorianame', _data.categorianame);
    formData.append('categoria_id', _data.categoria_id);
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + localStorage.getItem("token"),
      'Accept': 'application/json'
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

  EliminadoLogicoUsuario(_id:any){
    let url = this.url + 'EliminadoLogicoUsuario?id='+_id;

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

  EliminadoLogicoCategoria(_id:any){
    let url = this.url + 'EliminadoLogicoCategoria?id='+_id;

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
