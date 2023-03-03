import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../servicios/login.service'
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ""; msgEmail = "";
  password: string = "";
  arrayData: any;
  loginForm = false;
  msgPass = "";
  constructor(public login: LoginService, public rutas: Router) { }

   

  ngOnInit(): void {

  }

  onSubmit1() {
    this.loginForm = true;
    console.log('Submit... 1');
  }


  iniciarSesion() {
    if (this.email == "" || !this.email.includes('@') || this.email.length < 6 || this.password == "") {
      if (this.password == "") { this.msgPass = "Ingrese una contraseña" }
      if (!this.email.includes('@') || this.email.length < 6) { this.msgEmail = "Ingrese un correo electrónico" }

    } else {
      let inputlogin = {
        "email": this.email,
        "password": this.password
      }

      this.login.ValidarLogin(inputlogin).then((data: any) => {
        this.arrayData = data;
        //localStorage.setItem('sesionLogin', this.arrayData['result'][0].id_cuenta);
        //localStorage.setItem('rol', this.arrayData['result'][0].rol.rol);
        //localStorage.setItem('sesionLoginInicio', this.arrayData['result'][0].rol.rol);
        let token = this.arrayData['token'];
        let sesionLoginInicio = this.arrayData['usuario'][0]['roles'][0].id;
        let idAsambPerf = this.arrayData['usuario'][0].perfil_id;
        let user = this.arrayData['usuario'][0].name;
        let key = "GAMABAML"
        if (data.error != "Unauthorized") {
        localStorage.setItem('token', CryptoJS.AES.encrypt(token.trim(),key.trim()).toString());
        localStorage.setItem('email', this.email);
        localStorage.setItem('sesionLoginInicio', sesionLoginInicio);
        localStorage.setItem('idAsambPerf', idAsambPerf);
        localStorage.setItem('user', user);
        this.rutas.navigate(['/inicio']);
        }

      }).catch(error => {
        this.rutas.navigate(['/404']);

      })
    }
  }
}
