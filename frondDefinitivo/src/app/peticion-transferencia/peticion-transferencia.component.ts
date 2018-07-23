import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';
import {PeliculaService} from '../conexion/pelicula.service';
import {ActorService} from '../conexion/actor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from "../clases/usuario";
import {IPerfLoggingPrefs} from "selenium-webdriver/chrome";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers:[UsuarioService,PeliculaService,ActorService]
})
export class PeticionTransferenciaComponent implements OnInit {


  constructor(private _activatedRoute: ActivatedRoute,
              private _actorService: ActorService,
              private _usuarioService: UsuarioService,
              private _peliculaService: PeliculaService,
              private _httpClient:HttpClient,
              private _roter:Router) {}

  idUsuarioLogead=0;
  identificador;
  usuario;
  rangoAutos=4;
  botonPelicula="Pedir Transferencia";
  botonCargar="Cargar más";
  autos=[];
  autosMostrados="peliculas - 4";

  cargarPeliculas(){
    if(this.rangoAutos<this.autos.length)
      this.rangoAutos+=4;

    this.autosMostrados="autos - "+this.rangoAutos;
  }

  pedirAuto(identificador){
    const url=['/home',this.idUsuarioLogead,'seleccion',identificador];
    this._roter.navigate(url);
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe((data)=>this.idUsuarioLogead=data['idUsuario']);

    const parametrosRuta$=this._activatedRoute.params;
    parametrosRuta$.subscribe((parametros)=>{
      this.identificador=parametros['identificadorB'];

      const consultarUsuario$= this._httpClient.post("http://localhost:1337/Usuario/obtener",
        {idUsuario:this.identificador});
      consultarUsuario$.subscribe((usuario:any)=>{
        this.usuario=usuario;

        const obtenerAutos$=this._httpClient.post("http://localhost:1337/Actor/obtenerAutos",
          {identificador:this.usuario.conductores[0].id});

        obtenerAutos$.subscribe((conductorConAutos:any)=>{
          this._peliculaService=conductorConAutos.autos;
        });
      });
    });
  }
  ngDoCheck(){
  }
}
