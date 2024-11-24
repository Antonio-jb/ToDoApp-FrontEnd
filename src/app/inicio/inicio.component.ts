import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

    constructor(private router: Router) {}

    abrirNota(){
      this.router.navigate(['/app/nota'])
    }

}
