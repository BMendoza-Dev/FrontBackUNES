import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { 
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
    this.ionicForm.valid; debugger
    if (this.ionicForm.valid) {
      // Aquí puede agregar la lógica para enviar el formulario
      console.log(this.ionicForm.value);
    }else{
      console.log(`No entro`)
    }
  }
  
}
