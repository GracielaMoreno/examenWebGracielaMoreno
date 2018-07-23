import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {
  identificador=0;
  idPeliPedido=0;
  peliPedido;
  usuario;
  rangoPeliculas=4;
  botonPelicula="Seleccionar Transferencia";
  botonCargar="Cargar más";
  peliculas=[];
  peliculasMostrados="peliculas - 4";
  idPoseedor;
  solicitadorIgualPoseedor;
  cargarPeliculas(){
    if(this.rangoPeliculas<this.peliculas.length)
      this.rangoPeliculas+=4;

    this.peliculasMostrados="peliculas - "+this.rangoPeliculas;
  }

  realizarTransferencia(idPeliOfrecido){
    this.solicitadorIgualPoseedor=this.idPoseedor==this.identificador;

    if(this.solicitadorIgualPoseedor){

    }else{
      const crearTransferencia = this._httpClient.post("http://localhost:3000/Peticion/crear",
        {idPeliOfrecido:idPeliOfrecido,
          idPeliSolicitado:this.idPeliPedido,
          idPoseedor:this.idPoseedor,
          idOfrece:this.identificador});
      crearTransferencia.subscribe((resultadoOk)=>console.log(resultadoOk));
      console.log("transferencia creada");

      const url=['/home',this.identificador,'perfil'];
      this._router.navigate(url);
    }

  }
  constructor(private _httpClient:HttpClient,private _router:Router,private _activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    const recuperarPeliPedido= this._activatedRouter.params;
    recuperarPeliPedido.subscribe((parametros)=>{
      this.idPeliPedido=parametros['idPelicula'];
      console.log("idPeliPedido",this.idPeliPedido);

      const consultarPoseedor$= this._httpClient.post("http://localhost:1337/Usuario/obtener",
        {idAuto:this.idPeliPedido});
      consultarPoseedor$.subscribe((resultado:any)=>this.idPoseedor=resultado.idUsuario);

      const consultarPeliPedido=this._httpClient.get("http://localhost:1337/Pelicula/obtenerPorIdPelicula/"+this.idPeliPedido);
      consultarPeliPedido.subscribe((pelicula)=>this.peliPedido=pelicula);
    });

    const recuperarIdUsuario= this._activatedRouter.parent.params;
    recuperarIdUsuario.subscribe((parametros)=>{
      this.identificador=parametros['idUsuario'];

      const consultarUsuario$= this._httpClient.post("http://localhost:1337/Usuario/obtener",
        {idUsuario:this.identificador});
      consultarUsuario$.subscribe((usuario:any)=>{
        this.usuario=usuario;

        const obtenerPeliculas$=this._httpClient.post("http://localhost:1337/Actor/obtenerAutos",
          {identificador:this.usuario.conductores[0].id});

        obtenerPeliculas$.subscribe((conductorConPeliculas:any)=>{
          this.peliculas=conductorConPeliculas.peliculas;
        });
      });
    });
  }



}
