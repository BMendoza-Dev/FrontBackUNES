import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFacebookLiveService {

  constructor(private http: HttpClient) { }

  loginAssambly() {
    let formData = new FormData();
    let url = 'http://apiapp.asambleanacional.gob.ec/auth/login';
    let data = new URLSearchParams();
    data.set('username', '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62');
    data.set('password', '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134');
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return new Promise((resolve, reject) => {
      this.http.post(url, data.toString(), { headers: httpHeaders }).subscribe(res => {
        resolve(res); {
        }
      }, error => {
        reject(error);
      });
    });
  }


  getFacebookLive(token: string) {

    const httpheaders = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get('http://apiapp.asambleanacional.gob.ec/facebookLiveResource/getAll', { headers: httpheaders });
  }
}
