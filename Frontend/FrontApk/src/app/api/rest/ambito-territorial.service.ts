import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmbitoTerritorialService {

  urlApp;
  token;
  urlAWS: string;
  constructor(private httpClien: HttpClient) {
    this.urlApp = 'http://127.0.0.1:8000/api/'
    this.urlAWS = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
  }



  /*getTerritorialList() {
    
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/jason',
      'Authorization': localStorage.getItem("token")
    });
    return this.httpClien.get(this.urlApp + '/periodsResource/territorialDivision/', {headers: httpheaders});
  }*/

  ObtenerTerritorioApp() {
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClien.get(this.urlAWS + 'ObtenerTerritorioApp', { headers: httpheaders });
  }

  obtenerVideos(id) {
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClien.get(this.urlAWS + 'ListarVideos?id='+id, { headers: httpheaders });
  }

  ObtenerAsambleistaTerritorioApp(provic) {
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClien.get(this.urlAWS + 'ObtenerAsambleistaTerritorioApp?territorialDivision=' + provic, { headers: httpheaders });
  }



}
