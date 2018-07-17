import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';
import {PeliculaService} from '../conexion/pelicula.service';
import {ActorService} from '../conexion/actor.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers:[UsuarioService,PeliculaService,ActorService]
})
export class PeticionTransferenciaComponent implements OnInit {

  nombre = "Ximena";
  usuario:Usuario;
  listaActores = [];
  listaPeliculas = [];
  constructor(private _activarRoute:ActivatedRoute,private _actorService:ActorService,private _peliculaService:PeliculaService,private _usuarioService:UsuarioService) {
    this._activarRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuario']);
        this.getComidaPorUsuario(params['idUsuario']);
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
  getComidaPorUsuario(idUsuario) {
    this._actorService.getActoresporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaActores = result;
        this.getIngredientePorComida(this.listaActores[0].id);
      }
    );
  }
  getIngredientePorComida(idPelicula) {
    this._peliculaService.getPeliculaPorAutor(idPelicula).subscribe(
      (result: any[]) => {
        this.listaPeliculas = result;
      }
    )
  }
}
interface Usuario  {
  id: number,
  nombre: string,
  contrasena: string,
  urlImg: string
}
