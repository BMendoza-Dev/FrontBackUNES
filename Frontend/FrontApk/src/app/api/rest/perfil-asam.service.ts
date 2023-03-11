import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PerfilAsamService {

  urlApp;
  token: string;
  urlAWS: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApp = 'http://127.0.0.1:8000/api/'
    this.urlAWS = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
  }

  getAssamblyList() {
    let url = this.urlAWS + 'ListarPerfiles';
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });
    return new Promise((resolve, reject) => {
      this.httpCliente.get(url, { headers: httpheaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  getAssamblyPerfil(id_perfil) {
    let url = this.urlAWS + 'ObtenerPerfil?id=' + id_perfil;

    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders }).pipe(
      map((res: any) => ({
        img: res['image'][0].imagen,
        lastName: res['lastName'],
        firstName: res['firstName'],
        ambito: `${res['territorialDivision']} (${res['jurisdiction']})`,
        partido: res['politicalParty'],
        curul: res['curul'],
        edifice: res['localizacion']['edifice'],
        floor: res['localizacion']['floor'],
        office: res['localizacion']['office'],
        phone: `(593)2399 - 10000 ${res['localizacion']['phone']}`,
        email: res['email'],
        comisiones: res['comisiones']
      }))
    )
  }

  getBiografiaAssam(id: any) {
    let url = this.urlAWS + 'ObtenerBiografia?id=' + id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders }).pipe(
      map((res: any) => ({
        img: res['image'][0].imagen,
        perfil: res['perfil'],
        urlfb: res['urlfb'],
        urlit: res['urlit'],
        urlttk: res['urlttk'],
        urltw: res['urltw'],
      }
      )))
  }

  getVotacionPorAsambleista(id:any){
    let url = this.urlAWS + 'listarVotacionesAsambleista?id='+id;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpCliente.get(url, { headers: httpheaders }).pipe(
      map((res: any) => ({
        img: res['image'][0].imagen,
        perfil: res['perfil'],
        urlfb: res['urlfb'],
        urlit: res['urlit'],
        urlttk: res['urlttk'],
        urltw: res['urltw'],
      }
      )))
  }
}

