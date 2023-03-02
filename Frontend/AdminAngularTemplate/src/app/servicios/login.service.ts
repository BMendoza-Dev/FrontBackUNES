import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLocal: string;
  urlAWS: string;


  constructor(private http: HttpClient) { 
    this.urlLocal = "http://127.0.0.1:8000/api/"
    this.urlAWS = "https://rc5appmobile.tech/api/"
  }

  ValidarLogin(data: any) {
    let formData = new FormData();
    let url = this.urlLocal+'Login';
    formData.append('email', data.email);
    formData.append('password', data.password);
    debugger
    return new Promise((resolve, reject) => {
      this.http.post(url, formData).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }
}
