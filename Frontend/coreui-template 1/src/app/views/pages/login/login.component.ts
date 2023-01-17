import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../../servicios/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  correo:string="";
  pass:string="";
  arrayData:any;
  constructor(public login:LoginService, public rutas:Router) { }
  

  ngOnInit(): void {
    
  }

  iniciarSesion(){
    this.login.ValidarLogin(this.correo).then(data => {
        this.arrayData = data;
        if(this.pass == this.arrayData['result'][0].password){
          localStorage.setItem('sesionLogin', this.arrayData['result'][0].id_cuenta);
          localStorage.setItem('rol', this.arrayData['result'][0].role.rol);
          if(this.arrayData['result'][0].role.rol == "Administrador"){
            debugger
            this.rutas.navigate(['/administrador/cuentas']);
          }else if(this.arrayData['result'][0].role.rol == "Medicina General"){
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/medicinageneralcitas']);
          }else if(this.arrayData['result'][0].role.rol == "Rehabilitación Física"){
            localStorage.setItem('color', '1');
            this.rutas.navigate(['/rehabilitacionfisicacitas']);
          }else{
            this.rutas.navigate(['/404']);
          }
          debugger
        }
        this.arrayData['result'][0];
        debugger
    }).catch(error =>{
      console.log(error);
    })
  }
}
