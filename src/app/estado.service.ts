import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estadoRegistro = new BehaviorSubject<boolean>(false);

  estadoRegistro$ = this.estadoRegistro.asObservable();

  constructor() {}

  actualizarRegistro(estado: boolean ){
    this.estadoRegistro.next(estado);
  }

}
