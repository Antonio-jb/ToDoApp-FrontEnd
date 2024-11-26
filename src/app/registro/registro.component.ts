import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {EstadoService} from "../estado.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  formularioRegistro: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private estadoServicio: EstadoService) {

    this.formularioRegistro = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]

    });
  }

  onSubmit() {
    if (this.formularioRegistro.valid) {
      console.log('Usuario registrado:', this.formularioRegistro.value);
      alert("Usuario registrado");

      this.estadoServicio.actualizarRegistro(true);
      this.router.navigate(['/']);
    }
  }

  enviarALogin() {
    this.router.navigate(['/'])
  }
}


