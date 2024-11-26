import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EstadoService} from "../services/estado.service";
import {EstadoFiltroService} from "../services/estado-filtro.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private estadoService: EstadoFiltroService,
  ) {

    this.formulario = this.formBuilder.group({
      estado: ["", [Validators.required]],
    });
  }
  enviarEstado() {
    this.estadoService.actualizarEstado(this.formulario.value.estado);
  }
}
