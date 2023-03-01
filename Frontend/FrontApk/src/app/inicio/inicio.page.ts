import { Component, OnInit } from '@angular/core';
import { LoginService } from '../api/rest/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.login.ValidarLogin().then((data) =>{
      let dat = data;
      localStorage.setItem('token', dat['token']); 
    }).catch(error =>{
      console.log(error);
    })
  }

  slidesOptions = {
    slidesPerView: 1.5
  }
}
