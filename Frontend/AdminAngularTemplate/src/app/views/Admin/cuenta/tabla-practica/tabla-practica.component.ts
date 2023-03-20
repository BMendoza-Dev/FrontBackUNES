import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, FormControl, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { ValidationFormsService } from 'src/app/servicios/validation-forms.service';

export interface UserData {
  id: string;
  user: string;
  email: string;
  state: number;
}

export class PasswordValidators {
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password");
    const confirm = control.get("confirmPassword");
    if (password?.valid && password?.value === confirm?.value) {
      confirm?.setErrors(null);
      return null;
    }
    confirm?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}

@Component({
  selector: 'app-tabla-practica',
  templateUrl: './tabla-practica.component.html',
  styleUrls: ['./tabla-practica.component.scss'],
  providers: [ValidationFormsService]
})
export class TablaPracticaComponent  {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  clearFields() {
    this.form.reset();
  }

  onSubmit(){
    
  }
}

/** Builds and returns a new User. */
