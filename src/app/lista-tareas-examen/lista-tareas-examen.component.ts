import {Component, OnInit} from '@angular/core';
import {ListaDatosService} from "../lista-datos.service";
import {Router} from "@angular/router";
import {ListaDatos} from "../lista-datos/lista-datos";
import {FormGroup} from "@angular/forms";
import {EstadoService} from "../estado.service";
import {EstadoFiltroService} from "../estado-filtro.service";

@Component({
  selector: 'app-lista-tareas-examen',
  templateUrl: './lista-tareas-examen.component.html',
  styleUrl: './lista-tareas-examen.component.scss'
})
export class ListaTareasExamenComponent implements OnInit {

  public listatareas!: FormGroup;
  mostrarShow: boolean = false;
  estado: string = "todos";

  constructor(private listaDatosService: ListaDatosService,
              private router: Router,
              private estadoService: EstadoFiltroService
              ) {}

  ngOnInit() {
    this.estadoService.estado$.subscribe(valor => {
      this.estado = valor;
    })
  }

      listas: ListaDatos[] = [
    {
      id: 1,
      nombre: 'Juan.',
      descripcion: 'Reparar auto.',
      estado: 'Pendiente'
    },
    {
      id: 2,
      nombre: 'Jose.',
      descripcion: 'Cenar.',
      estado: 'Finalizado'

    },
    {
      id: 3,
      nombre: 'Antonio.',
      descripcion: 'Hacer mercado.',
      estado: 'Finalizado'
    },
    {
      id: 4,
      nombre: 'Emily.',
      descripcion: 'Dormir siesta.',
      estado: 'Pendiente'
    },
    {
      id: 5,
      nombre: 'Adrian.',
      descripcion: 'Jugar bolos.',
      estado: 'Finalizado'
    }];

  enviarDatos(item: ListaDatos) {
    this.router.navigate(['/app/detalles-tarea']);
  }

}

