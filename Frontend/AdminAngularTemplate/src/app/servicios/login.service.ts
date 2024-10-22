import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Echo from 'laravel-echo';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLocal: string;
  urlAWS: string;
  url: string;

  constructor(private http: HttpClient) {
    this.urlLocal = "http://127.0.0.1:8000/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
    this.url = this.urlAWS;
  }

  ValidarLogin(data: any) {
    let formData = new FormData();
    let url = this.url + 'Login';
    formData.append('email', data.email);
    formData.append('password', data.password);

    // let httpHeaders = new HttpHeaders(
    //   { 'Content-Type': 'application/x-www-form-urlencoded' }
    // )
    
    return new Promise((resolve, reject) => {
      this.http.post(url, formData).subscribe(res => {
        resolve(res); {
        }
      }, error => {

        reject(error);
      });
    });
  }

  getSockets(): Echo {
    return new Echo({
      broadcaster: 'pusher',
      key: 'apprc_key',
      wsHost: 'rc5appmobile.tech',
      cluster: 'mt1',
      //  wsPort: 6001,
      forceTLS: true,
      //    disableStats: true,
      encrypted: true,
      enabledTransports: ['wss', 'ws']
    });
  }


}
