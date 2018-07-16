import { Component, OnInit } from '@angular/core';
import {ActoresEntity} from '../../../../project/src/actores/actores.entity';
import {PeliculasService} from '../Conexion/peliculas.service';
import {ActorService} from '../Conexion/actor.service';
import {UsuarioService} from '../Conexion/usuario.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css'],
  providers: [ActorService, PeliculasService, UsuarioService]
})
export class RutaHomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
