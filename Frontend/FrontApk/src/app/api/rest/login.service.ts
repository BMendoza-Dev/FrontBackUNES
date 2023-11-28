import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlApp: string;
  urlAWS: string;

  constructor(private http: HttpClient) {
    this.urlApp = 'http://127.0.0.1:8000/api/'
    this.urlAWS = 'https://rc5appmobile.tech/api/';
  }

  ValidarLogin() {
    let formData = new FormData();
    let url = this.urlAWS + 'Login';
    formData.append('email', "superadmin@hotmail.com");
    formData.append('password', "12345678");
    let httpHeaders = new HttpHeaders (
      { 'Content-Type':'application/x-www-form-urlencoded'}
     )
    return new Promise((resolve, reject) => {
      this.http.post(url, formData).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  LoginAppMobile(_data:any){
    let formData = new FormData();
    let url = this.urlAWS + 'LoginAppMobile';
    formData.append('email', _data.email);
    formData.append('password', _data.password);
    formData.append('identificador', _data.identificador);
    // let httpHeaders = new HttpHeaders (
    //   { 'Content-Type':'application/x-www-form-urlencoded'}
    //  )
    return new Promise((resolve, reject) => {
      this.http.post(url, formData).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

 
 /* getSockets(): Echo {
    return new Echo({
      broadcaster: 'pusher',
      key: 'apprc_key',
      wsHost: 'ec2-18-207-3-198.compute-1.amazonaws.com',
      cluster: 'mt1',
      wssPort: 443, // Deshabilitar WebSocket y utilizar HTTPS
      wsPort: 6001, // Deshabilitar WebSocket y utilizar HTTPS
      disableStats: true,
      forceTLS: true,
      encrypted: true,
      enabledTransports: ['wss', 'ws'],
      sslOptions: {
        rejectUnauthorized: false, // Deshabilitar la validación de certificados
      },
    });
  }*/
}
