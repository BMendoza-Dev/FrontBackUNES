import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApp;
  token;
  passwordApp;
  constructor( private httpClien: HttpClient) {
    this.urlApp = 'http://apiapp.asambleanacional.gob.ec';
    this.token = '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62';
  
   }

  loginApp() {
    
    const headers = new HttpHeaders().append('Authorization', "Bearer "+this.token);
    return this.httpClien.post(this.urlApp, { headers: headers });
}
}
