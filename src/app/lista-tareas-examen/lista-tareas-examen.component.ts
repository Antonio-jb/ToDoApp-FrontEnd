import {Component, OnInit} from '@angular/core';
import {ListaDatosService} from "../services/lista-datos.service";
import {Router} from "@angular/router";
import {ListaDatos} from "../services/interfaces/lista-datos";
import {FormGroup} from "@angular/forms";
import {EstadoService} from "../services/estado.service";
import {EstadoFiltroService} from "../services/estado-filtro.service";

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
    this.listaDatosService.setDatos(item);
    this.router.navigate(['/app/detalles-tarea']);
  }

}

