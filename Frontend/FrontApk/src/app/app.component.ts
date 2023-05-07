import { Component } from '@angular/core';
import { LoginService } from '../app/api/rest/login.service';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  identificador: string;

  constructor(private restLogin: LoginService) {
    this.myFunction();
  }

  ngOnInit(){
    
  }

  async myFunction() {
    const deviceInfo = await Device.getId();
    this.identificador = deviceInfo.uuid;
    this.goApp();
    
  }
  
  goApp(){
    let data ={
      email:`${this.identificador}@rc5app.com`,
      password:this.identificador,
      identificador:this.identificador
    }
    
    this.restLogin.LoginAppMobile(data).then((data) =>{
      
      localStorage.setItem('token', data['access_token']); 
    }).catch(error =>{
      console.log(error);
    })
  }

  

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
}
