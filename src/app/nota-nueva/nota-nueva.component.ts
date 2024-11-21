import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nota-nueva',
  templateUrl: './nota-nueva.component.html',
  styleUrl: './nota-nueva.component.scss'
})
export class NotaNuevaComponent {

  constructor(private router: Router) {}

  enviarAtrasInicio(){
    this.router.navigate(['/app/inicio']);
  }

}
