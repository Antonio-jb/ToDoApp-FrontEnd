import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nota-footer',
  templateUrl: './nota-footer.component.html',
  styleUrl: './nota-footer.component.scss'
})
export class NotaFooterComponent {

  constructor(private router: Router) {}

  enviarInicio(){
    this.router.navigate(['/app/inicio']);
  }


}
