import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssamblymembersService {

  urlApp;
  constructor(private httpClien: HttpClient) {
    this.urlApp = 'http://apiapp.asambleanacional.gob.ec';
  }



  getAssamblyList() {
    
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/jason',
      'Authorization': localStorage.getItem("token")
    });
    return this.httpClien.get(this.urlApp + '/assemblyMembersResource/find/6/0/0/false/false/false/0/0/0', {headers: httpheaders});
  }
}
