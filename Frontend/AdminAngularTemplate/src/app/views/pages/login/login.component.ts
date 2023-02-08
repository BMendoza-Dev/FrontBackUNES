import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../../servicios/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email:string="";
  password:string="";
  arrayData:any;
  constructor(public login:LoginService, public rutas:Router) { }
  

  ngOnInit(): void {
    
  }

  iniciarSesion(){
    let inputlogin ={
      "email":this.email,
      "password":this.password
    }
    this.login.ValidarLogin(inputlogin).then(data => {
        this.arrayData = data;
        
        if(this.arrayData != 401){
          

          localStorage.setItem('token', this.arrayData['token']);
          localStorage.setItem('email', this.email);
          localStorage.setItem('sesionLoginInicio', this.arrayData['usuario'][0]['rol'].id);
          localStorage.setItem('idAsambPerf',this.arrayData['usuario'][0].perfil_id);
          debugger
          //localStorage.setItem('sesionLogin', this.arrayData['result'][0].id_cuenta);
          //localStorage.setItem('rol', this.arrayData['result'][0].rol.rol);
          //localStorage.setItem('sesionLoginInicio', this.arrayData['result'][0].rol.rol);
          if(this.arrayData['usuario'][0]['rol'].id == 1){
            
            this.rutas.navigate(['/inicio']);
          }else if(this.arrayData['usuario'][0]['rol'].id == 2){
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/inicio']);
          }else if(this.arrayData['usuario'][0]['rol'].id == 3){
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/inicio']);
          }else{
            this.rutas.navigate(['/404']);
            
          }
          
        }
        this.arrayData['result'][0];
        
    }).catch(error =>{
      console.log(error);
    })
  }
}
