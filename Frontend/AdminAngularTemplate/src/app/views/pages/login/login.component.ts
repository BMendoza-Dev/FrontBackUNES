import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../servicios/login.service'

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
      
      this.login.ValidarLogin(inputlogin).then(data => {
        this.arrayData = data;
        
          
          localStorage.setItem('token', this.arrayData['token']);
          localStorage.setItem('email', this.email);
          localStorage.setItem('sesionLoginInicio', this.arrayData['usuario'][0]['rol'].id);
          localStorage.setItem('idAsambPerf', this.arrayData['usuario'][0].perfil_id);
          
          //localStorage.setItem('sesionLogin', this.arrayData['result'][0].id_cuenta);
          //localStorage.setItem('rol', this.arrayData['result'][0].rol.rol);
          //localStorage.setItem('sesionLoginInicio', this.arrayData['result'][0].rol.rol);
          if (this.arrayData['usuario'][0]['rol'].id == 1) {
            this.rutas.navigate(['/inicio']);
          } else if (this.arrayData['usuario'][0]['rol'].id == 2) {
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/inicio']);
          } else if (this.arrayData['usuario'][0]['rol'].id == 3) {
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/inicio']);
          } else {
            this.rutas.navigate(['/404']);
          }
        
        
      }).catch(error => {
        //console.log(error);
          this.msgPass = "El correo o contraseña estan incorrecto"
          this.password = "";
        
      })
    }
  }
}
