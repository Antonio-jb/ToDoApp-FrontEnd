import { Component } from '@angular/core';
import { ListaTareasExamenComponent} from "../lista-tareas-examen/lista-tareas-examen.component";
import {Router} from "@angular/router";
import {ListaDatosService} from "../services/lista-datos.service";
import {ListaDatos} from "../services/interfaces/lista-datos";

@Component({
  selector: 'app-detalles-tarea-examen',
  templateUrl: './detalles-tarea-examen.component.html',
  styleUrl: './detalles-tarea-examen.component.scss'
})
export class DetallesTareaExamenComponent {

  tarea: ListaDatos | null = null;

  constructor(
      private listaDatosService: ListaDatosService,
        private router: Router) {}

  ngOnInit() {
    this.listaDatosService.listaUnDatos$.subscribe((dato: ListaDatos | null) => {
      this.tarea = dato;
    });
  }

  enviarAtrasLista(){
    this.router.navigate(['/app/lista']);
  }

}
