import { Component } from '@angular/core';
import { LoginService } from './api/asambapk/login.service';
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
    this.restLogin.loginApp().subscribe(response => {
      localStorage.setItem('token',  response['token']); 
      debugger
    }, error => { console.error('Error login >>' + JSON.stringify(error)); });
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
