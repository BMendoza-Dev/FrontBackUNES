import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Echo from 'laravel-echo';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLocal: string;
  urlAWS: string;


  constructor(private http: HttpClient) { 
    this.urlLocal = "http://localhost/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
  }

  ValidarLogin(data: any) {
    let formData = new FormData();
    let url = this.urlAWS+'Login';
    formData.append('email', data.email);
    formData.append('password', data.password);
    
    return new Promise((resolve, reject) => {
      this.http.post(url, formData).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }

  getSockets(): Echo{
    return new Echo({
      broadcaster: 'pusher',
      key: 'apprc_key',
      wsHost: 'ec2-54-236-56-219.compute-1.amazonaws.com',
      cluster: 'mt1',
      //wssPort: 6001,
      disableStats: true,
      forceTLS:false,
      encrypted:false,
      enabledTransports:['ws']
    });
  }
}
