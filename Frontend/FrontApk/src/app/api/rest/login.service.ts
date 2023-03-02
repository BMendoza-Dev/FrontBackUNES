import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    var formData = new FormData();
    let url = this.urlApp+'Login';
    formData.append('email', "superadmin@hotmail.com");
    formData.append('password', "12345678");
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
