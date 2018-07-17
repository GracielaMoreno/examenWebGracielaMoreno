import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';
import {PeliculaService} from '../conexion/pelicula.service';
import {ActorService} from '../conexion/actor.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[UsuarioService,PeliculaService,ActorService]
})
export class InicioComponent implements OnInit {
  datoABuscar;
  usuarioActual: Usuario;
  //Usuario
  listaUsuarios = [];
  usuario_numeroItems = 4;
  usuario_cantidadPaginas;
  usuario_listaAMostrar;
  usuario_paginaActual: number = 1;

  //Actores
  listaActores = [];
  actor_numeroItems = 2;
  actor_cantidadPaginas;
  actor_listaAMostrar;
  actor_paginaActual: number = 1;

  //Peliculas
  listaPeliculas = [];
  pelicula_numeroItems = 2;
  pelicula_cantidadPaginas;
  pelicula_listaAMostrar;
  pelicula_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _ActorServcie: ActorService,
              private _PeliculaService: PeliculaService,
              private _router: Router,private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuarioActual']);
      });
  }

  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }

  cargarDatosbusqueda() {

    //Usuarios
    this._usuarioService.getUsuariosBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems);
      }
    );
    //Actor
    this._ActorServcie.getActorBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaActores = result;
        this.actor_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaActores, this.actor_numeroItems);
        this.actor_listaAMostrar = this.obtenerListaAMostrar(this.listaActores, this.actor_paginaActual, this.actor_numeroItems);
      }
    );
    //Ppelicula
    this._PeliculaService.getPeliculaBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaPeliculas = result;
        this.pelicula_cantidadPaginas = this.obtenerCantidadPaginas(this.listaPeliculas, this.pelicula_numeroItems);
        this.pelicula_listaAMostrar = this.obtenerListaAMostrar(this.listaPeliculas, this.pelicula_paginaActual, this.pelicula_numeroItems);
      }
    );
  }

  obtenerCantidadPaginas(lista: any [], numeroItems): number {

    let cantidadPaginas: number = lista.length/numeroItems;
    if (!Number.isInteger(cantidadPaginas)) {
      cantidadPaginas = cantidadPaginas + 1;
      cantidadPaginas = Number.parseInt(cantidadPaginas.toString());
    }
    return cantidadPaginas;
  }

  obtenerListaAMostrar(listaUsuarios: any [], paginaActual, numeroItems): any [] {
    let lista = listaUsuarios.slice(paginaActual*numeroItems - numeroItems, paginaActual*numeroItems);
    return lista;
  }

  nextUsuario() {
    this.usuario_paginaActual += 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }
  prevUsuario() {
    this.usuario_paginaActual -= 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }

  nextActor() {
    this.actor_paginaActual += 1;
    this.actor_listaAMostrar = this.obtenerListaAMostrar(this.listaActores, this.actor_paginaActual, this.actor_numeroItems)
  }
  prevActor() {
    this.actor_paginaActual -= 1;
    this.actor_listaAMostrar = this.obtenerListaAMostrar(this.listaActores, this.actor_paginaActual, this.actor_numeroItems)
  }

  nextPelicula() {
    this.pelicula_paginaActual += 1;
    this.pelicula_listaAMostrar = this.obtenerListaAMostrar(this.listaActores, this.pelicula_paginaActual, this.pelicula_numeroItems);
  }
  prevPelicula() {
    this.pelicula_paginaActual -= 1;
    this.pelicula_listaAMostrar = this.obtenerListaAMostrar(this.listaPeliculas, this.pelicula_paginaActual, this.pelicula_numeroItems);
  }
  irAPeticionesDeTransferencia(idUsuario: string) {
    this._.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuario];
        this._router.navigate(url);
      }
    );
  }

  irASeleccionTransferencia(idIngrediente: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/selecTransf', params['idUsuarioActual'],idIngrediente];
        this._router.navigate(url);
      }
    );
  }

}
export interface Usuario  {
  id: number,
  nombre: string,
  contrasena: string,
  urlImg: string
}
