import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  ionicForm: FormGroup;
  mensaje: any;
  constructor(public formBuilder: FormBuilder, private emailComposer: EmailComposer, private menuController:MenuController) { 
    this.ionicForm = new FormGroup({
      Nombre: new FormControl('', Validators.required),
      Apellidos: new FormControl('',Validators.required),
      Email: new FormControl('',[Validators.required,Validators.email]),
      Telefono: new FormControl(''),
      Agrupacion: new FormControl(''),
      Consulta: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.ionicForm.valid; 
    if (this.ionicForm.valid) {
      this.sendEmail();
    }else{
      console.log(`No entro`)
    }
  }

  sendEmail() {
    let email = {
      to: 'destinatario@ejemplo.com',
      subject: 'Asunto del correo electrónico',
      body: 'Contenido del correo electrónico',
      isHtml: true
    };
  
    this.emailComposer.open(email);
  }

  abrirMenu(){
    this.menuController.open();
  }
}

