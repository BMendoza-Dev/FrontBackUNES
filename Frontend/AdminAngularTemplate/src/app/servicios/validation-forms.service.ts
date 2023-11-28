import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationFormsService {

  errorMessages: any;

  formRules = {
    nonEmpty: '[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*',
    usernameMin: 5,
    passwordMin: 8,
    passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
  };

  formErrors = {
    //firstName: '',
    //lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
  };

  constructor() {
    this.errorMessages = {
      firstName: {
        required: 'First name is required',
      },
      lastName: {
        required: 'Last name is required',
      },
      username: {
        required: 'Se requiere un nombre de usuario',
        minLength: `El nombre de usuario debe tener ${this.formRules.usernameMin} letras o más`,
        pattern: 'Debe contener letras y/o números, sin espacios finales, ni caracteres especiales'
      },
      email: {
        required: 'required',
        email: 'Dirección de correo electrónico no válida',
      },
      password: {
        required: 'Se requiere una contraseña',
        pattern: 'La contraseña debe contener: números, letras mayúsculas y minúsculas',
        minLength: `La contraseña debe tener al menos ${this.formRules.passwordMin} caracteres`
      },
      confirmPassword: {
        required: 'Se requiere confirmación de contraseña',
        passwordMismatch: 'La contraseña debe coincidir'
      },
      accept: {
        requiredTrue: 'Tienes que aceptar nuestros Términos y Condiciones'
      },
    };
  }
}