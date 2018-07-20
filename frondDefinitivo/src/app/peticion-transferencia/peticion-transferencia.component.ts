import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';
import {PeliculaService} from '../conexion/pelicula.service';
import {ActorService} from '../conexion/actor.service';
import {ActivatedRoute} from '@angular/router';
import {Usuario} from "../clases/usuario";
import {IPerfLoggingPrefs} from "selenium-webdriver/chrome";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers:[UsuarioService,PeliculaService,ActorService]
})
export class PeticionTransferenciaComponent implements OnInit {

  usuario: Usuario;
  listaActor = [];
  listaPeliculas = [];
  usuarioActual: Usuario;

  constructor(private _activatedRoute: ActivatedRoute,
              private _actorService: ActorService,
              private _usuarioService: UsuarioService,
              private _peliculaService: PeliculaService
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getUsuarioPorId(params['idUsuario']);
        this.getActorPorUsuario(params['idUsuario']);
      });
  }
  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuario =  result[0];
      }
    )
  }
  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getActorPorUsuario(idUsuario) {
    this._actorService.getActoresporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaActor = result;
        this.getPeliculaPorComida(this.listaActor[0].id);
      }
    );
  }
  getPeliculaPorComida(idActor) {
    this._peliculaService.getPeliculaPorAutor(idActor).subscribe(
      (result: any[]) => {
        this.listaPeliculas = result;
      }
    )
  }
}
