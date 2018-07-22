import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';
import {PeliculaService} from '../conexion/pelicula.service';
import {ActorService} from '../conexion/actor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from "../clases/usuario";


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

  idActual;
  //Actores
  listaActores = [];
  actor_numeroItems = 2;
  actor_cantidadPaginas;
  actor_listaAMostrar;
  actor_paginaActual: number = 1;

  //Peliculas
  listaPeliculas = [];
  pelicula_numeroItems = 4;
  pelicula_cantidadPaginas;
  pelicula_listaAMostrar;
  pelicula_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _ActorServcie: ActorService,
              private _PeliculaService: PeliculaService,
              private _router: Router,private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.idActual=params['idActual'];
        this.getUsuarioPorId(params['idActual']);

        console.log(params['idActual']);
      });
  }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)

      }
    );
    this._ActorServcie.getActor().subscribe(
      (result: any[]) => {
        this.listaActores = result;
        this.actor_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaActores, this.actor_numeroItems);
        this.actor_listaAMostrar = this.obtenerListaAMostrar(this.listaActores, this.actor_paginaActual, this.actor_numeroItems);

      }
    );
    this._PeliculaService.getPelicula().subscribe(
      (result: any[]) => {
        this.listaPeliculas = result;
        this.pelicula_cantidadPaginas = this.obtenerCantidadPaginas(this.listaPeliculas, this.pelicula_numeroItems);
        this.pelicula_listaAMostrar = this.obtenerListaAMostrar(this.listaPeliculas, this.pelicula_paginaActual, this.pelicula_numeroItems);

      }
    );
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
        console.log(this.usuarioActual);
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
  irAPeticionesDeTransferencia(idUsuario:string) {
    this._usuarioService.getTransferenciaPorId(idUsuario).subscribe(
      (result: any) => {
        const url = ['/home',this.idActual,'peticion', this.idActual,idUsuario];
        this._router.navigate(url);
      }

    );
  }
  visitarUsuario(idVisitado: number){
    const ruta = ['/home',this.idActual,'peticion',this.idActual,idVisitado];
    this._router.navigate(ruta);
  }

  irASeleccionTransferencia(idPelicula: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/home',this.idActual,'peticion', params['idUsuarioActual'],idPelicula];
        this._router.navigate(url);
      }
    );
  }
}

