import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) { }

  ValidarLogin(data:any) {
    var formData = new FormData();
    let  url = 'http://127.0.0.1:8000/api/Login';
    formData.append('email', data.email);
    formData.append('password', data.password);
    return new Promise ((resolve, reject) => {
      this.http.post(url,formData ).subscribe(res => {
        resolve(res);{
        }
      }, error => {
        reject(error);
      });
    });
  }
}
