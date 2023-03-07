import { Component } from '@angular/core';
import { LoginService } from '../app/api/rest/login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private restLogin: LoginService) {}

  ngOnInit(){
    this.goApp();
  }
  
  goApp(){
    this.restLogin.ValidarLogin().then((data) =>{
      let dat = data;
      localStorage.setItem('token', dat['token']); 
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
