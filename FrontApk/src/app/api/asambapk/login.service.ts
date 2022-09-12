import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApp;
  usernameApp;
  passwordApp;
  constructor( private httpClien: HttpClient) {
    this.urlApp = 'http://apiapp.asambleanacional.gob.ec';
    this.usernameApp = '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62';
    this.passwordApp = '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134';
  
   }

  loginApp() {
    const data = 'username=' + this.usernameApp + '&password=' + this.passwordApp;
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClien.post(this.urlApp + '/auth/login', data, { headers: headers });
}
}
