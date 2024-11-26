import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {InicioComponent} from "./inicio/inicio.component";
import {NotaNuevaComponent} from "./nota-nueva/nota-nueva.component";
import {NotaAbiertaComponent} from "./nota-abierta/nota-abierta.component";
import {RegistroComponent} from "./registro/registro.component";
import {ListaTareasExamenComponent} from "./lista-tareas-examen/lista-tareas-examen.component";
import {DetallesTareaExamenComponent} from "./detalles-tarea-examen/detalles-tarea-examen.component";

const routes: Routes = [
  {
      path: "",
      component: LayoutSinHeaderComponent,
      children: [
        {path: "", component: LoginComponent},
          {path: "registro", component: RegistroComponent}
    ]
},
  {path: "app", component: LayoutConHeaderComponent, children: [
      {path: "inicio", component: InicioComponent},
          {path: "nota_nueva", component: NotaNuevaComponent},
              {path: "nota", component: NotaAbiertaComponent},
                  {path: "lista", component: ListaTareasExamenComponent},
          {path: "detalles-tarea", component: DetallesTareaExamenComponent}
    ]},
    {path: "**", component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }