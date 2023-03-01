import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ValidarLogin() {
    var formData = new FormData();
    let url = 'https://rc5appmobile.tech/api/Login';
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
