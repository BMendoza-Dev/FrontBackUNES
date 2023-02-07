import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-forms-administrador',
  templateUrl: './forms-administrador.component.html',
  styleUrls: ['./forms-administrador.component.scss']
})
export class FormsAdministradorComponent implements OnInit {

  iconEyeContr = "password"
  iconEyeConfContr = "password"
  usuario:string= "";
  correo:string = "";
  contrasena:string = "";
  contrasenaConf:string = "";
  usuarioEdit:string= "";
  correoEdit:string = "";
  msmConfContrasena:string="";
  constructor(private adminService: AdministradorService){}

  ngOnInit(){
    this.cargarInputAdmin();
  }

  cambiarIconContr(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeContr == "text"){
      this.iconEyeContr = "password";
    }else{
      this.iconEyeContr = "text";
    }
  }

  cambiarIconConfContr(){ //Cambio de Icono en el Password Input Asambleista
    if(this.iconEyeConfContr == "text"){
      this.iconEyeConfContr = "password";
    }else{
      this.iconEyeConfContr = "text";
    }
  }

  customStylesValidated1 = false;
  onSubmit1(){
    this.customStylesValidated1 = true;
  }

  datos:any = []
  cargarInputAdmin(){
    this.adminService.cargarCuentaAdmin().then(data =>{
      this.datos = data;
      this.usuario = this.datos[0].name;
      this.correo = this.datos[0].email;

      debugger
    }).catch(error =>{
      console.log(error);
    })
  }

  

  mostrarInput:boolean = true;
  editarInput:boolean = false;
  mostrar(){
    this.mostrarInput = true;
    this.editarInput = false;

  }

  editar(){
    this.mostrarInput = false;
    this.editarInput = true;
    this.usuarioEdit = this.usuario;
    this.correoEdit = this.correo;
  }

  update(){
    if(this.contrasena == this.contrasenaConf){
      debugger
      let data = {
        'name': this.usuarioEdit,
        'email': this.correoEdit,
        'password': this.contrasenaConf,
        'perfil_id': 1,
        'estado': 1,
        'id': 1
      };
      this.adminService.updateAsamAsisCuentas(data).then(data => {
        this.onReset1();
      }).catch(error =>{
        console.log(error);
      })
    }else{
      this.msmConfContrasena = "La contraseña no coincide!"
    }
    
  }

  onReset1(){
    this.correoEdit = "";
    this.usuarioEdit = "";
    this.contrasena = "";
    this.contrasenaConf = "";
    this.customStylesValidated1 = false;
  }


}
