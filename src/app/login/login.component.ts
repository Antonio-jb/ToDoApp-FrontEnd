import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {EstadoService} from "../estado.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formularioLogin!: FormGroup;
  public estaRegistrado: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private estadoServicio: EstadoService) {}

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.estadoServicio.estadoRegistro$.subscribe(estado => {
      this.estaRegistrado = estado;
    })
  }

  onSubmit(): void {
    if (this.formularioLogin.valid) {
      console.log('Formulario enviado.', this.formularioLogin.value);
      this.enviarInicio();
    }
  }

  enviarInicio() {
    if (this.estaRegistrado) {
      this.router.navigate(['/app/inicio']);
    } else {
      console.log("Usuario no registrado.")
    }
  }

  enviarARegistro() {
    this.router.navigate(['registro'])
  }
}
