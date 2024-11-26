import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ListaDatos} from "./interfaces/lista-datos";

@Injectable({
  providedIn: 'root'
})
export class ListaDatosService {

  datos: BehaviorSubject<ListaDatos | null> = new BehaviorSubject<ListaDatos | null>(null);

  listaUnDatos$: Observable<ListaDatos|null> = this.datos.asObservable();

  constructor() {}

  setDatos(datos: ListaDatos|null){
    this.datos.next(datos);
  }

}
