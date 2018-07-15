import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { LoginComponent } from './login/login.component';
import { ModeloUsuarioComponent } from './modelo-usuario/modelo-usuario.component';
import { ModeloActorComponent } from './modelo-actor/modelo-actor.component';
import { ModeloPeliculaComponent } from './modelo-pelicula/modelo-pelicula.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ActorComponent } from './actor/actor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    LoginComponent,
    ModeloUsuarioComponent,
    ModeloActorComponent,
    ModeloPeliculaComponent,
    PeliculaComponent,
    ActorComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }