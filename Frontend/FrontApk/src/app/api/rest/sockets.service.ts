import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  urlApp: string;
  urlAWS: string;
  token: string;
  

  constructor(private httpClient:HttpClient) {
    this.urlApp = 'http://127.0.0.1:8000/api/'
    this.urlAWS = 'https://rc5appmobile.tech/api/';
    this.token = localStorage.getItem('token');
   }

  getSockets(): Echo{
    return new Echo({
      broadcaster: 'pusher',
      key: 'apprc_key',
      wsHost: 'rc5appmobile.tech',
      cluster: 'mt1',
    //  wsPort: 6001,
      forceTLS:true,
  //    disableStats: true,
      encrypted:true,
      enabledTransports:['wss','ws']
    });
  }

  NotifiqueUserApp(){
    let url = this.urlAWS + 'NotifiqueUserApp';
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClient.get(url, { headers: httpheaders });
  }

  make_notify_read_AppMobile(notificationId:any){
    let url = this.urlAWS + 'make_notify_read_AppMobile?notificationId='+notificationId;
    const httpheaders = new HttpHeaders({
      'Authorization': "Bearer " + this.token
    });

    return this.httpClient.get(url, { headers: httpheaders });
  }

}
