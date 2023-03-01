import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmbitoTerritorialService {

  urlApp;
  token;
  constructor(private httpClien: HttpClient) {
    this.urlApp = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
  }



  /*getTerritorialList() {
    
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/jason',
      'Authorization': localStorage.getItem("token")
    });
    return this.httpClien.get(this.urlApp + '/periodsResource/territorialDivision/', {headers: httpheaders});
  }*/

  getTerritorialList() {
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClien.get(this.urlApp + 'ObtenerTerritorio', { headers: httpheaders });
  }

  getAsambleistaTerritorio(provic) {
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClien.get(this.urlApp + 'ObtenerAsambleistaTerritorio?territorialDivision=' + provic, { headers: httpheaders });
  }



}
