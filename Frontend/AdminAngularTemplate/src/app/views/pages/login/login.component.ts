import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../servicios/login.service'
import { SpinnerService } from '../../../servicios/spinner.service'

import * as CryptoJS from 'crypto-js';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ""; msgError = "Cuenta de usuario no válido.";
  password: string = "";
  arrayData: any;
  loginForm = false;
  msgPass = "";
  visible = false;
  dismissible = true;
  constructor(public login: LoginService, public rutas: Router, private spinnerService:SpinnerService) { }
  
   

  ngOnInit(): void {
    
  }

  onSubmit1() {
    this.loginForm = true;
    console.log('Submit... 1');
  }


  iniciarSesion() {
    if (this.email == "" || !this.email.includes('@') || this.email.length < 6 || this.password == "") {
      
      if (this.password == "") { 
        this.msgError = "Ingrese una contraseña" 
      }
      if (!this.email.includes('@')) { 
        this.msgError = "Ingrese un correo electrónico"; this.visible=true 
      }

    } else {
      this.spinnerService.llamarSpinner();
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
        let sesionLoginInicio = this.arrayData['usuario'][0]['roles'][0].slug;
        let idAsambPerf = this.arrayData['usuario'][0].perfil_id;
        let user = this.arrayData['usuario'][0].name;
        let key = "GAMABAML"
        if (data.error != "Unauthorized") {
        localStorage.clear();
        localStorage.setItem('token', token);
        localStorage.setItem('email', this.email);
        localStorage.setItem('sesionLoginInicio', sesionLoginInicio);
        localStorage.setItem('idAsambPerf', idAsambPerf);
        localStorage.setItem('user', user);
        console.log(token);
        this.spinnerService.detenerSpinner();
        this.rutas.navigate(['/inicio']);
        }else{
          this.msgError = "Cuenta de usuario no válido.";
        }

      }).catch(error => {
        
        this.rutas.navigate(['/404']);

      })
    }
  }
}
