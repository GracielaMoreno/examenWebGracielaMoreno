import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ComponenteUsuarioComponent } from './componente-usuario/componente-usuario.component';
import { ComponentePeliculaComponent } from './componente-pelicula/componente-pelicula.component';
import { ComponenteActorComponent } from './componente-actor/componente-actor.component';
import { BarraInicioComponent } from './barra-inicio/barra-inicio.component';
import { PeticionTransferenciaComponent } from './peticion-transferencia/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './seleccion-transferencia/seleccion-transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    ComponenteUsuarioComponent,
    ComponentePeliculaComponent,
    ComponenteActorComponent,
    BarraInicioComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, {
      useHash: true}),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
