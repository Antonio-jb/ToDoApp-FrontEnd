import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nota-abierta',
  templateUrl: './nota-abierta.component.html',
  styleUrl: './nota-abierta.component.scss'
})
export class NotaAbiertaComponent {

  constructor(private router: Router) {}

  showNav: boolean = false;

  enviarAtrasInicio(){
    this.router.navigate(['/app/inicio']);
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

}
