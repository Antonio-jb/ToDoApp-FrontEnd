import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotaNuevaComponent } from './nota-nueva/nota-nueva.component';
import { NotaFooterComponent } from './nota-footer/nota-footer.component';
import { NotaAbiertaComponent } from './nota-abierta/nota-abierta.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutConHeaderComponent,
    LayoutSinHeaderComponent,
    InicioComponent,
    NotaNuevaComponent,
    NotaFooterComponent,
    NotaAbiertaComponent,
    RegistroComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
