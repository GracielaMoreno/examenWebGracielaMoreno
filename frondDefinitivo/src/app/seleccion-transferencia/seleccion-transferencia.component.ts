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
  rangoAutos=4;
  botonAuto="Seleccionar Transferencia";
  botonCargar="Cargar más";
  autos=[];
  autosMostrados="peliculas - 4";
  idPoseedor;
  solicitadorIgualPoseedor;
  cargarAutos(){
    if(this.rangoAutos<this.autos.length)
      this.rangoAutos+=4;

    this.autosMostrados="autos - "+this.rangoAutos;
  }

  realizarTransferencia(idPeliOfrecido){
    this.solicitadorIgualPoseedor=this.idPoseedor==this.identificador;

    if(this.solicitadorIgualPoseedor){

    }else{
      const crearTransferencia = this._httpClient.post("http://localhost:3000/Peticion/crear",
        {idPeliOfrecido:idPeliOfrecido,
          idAutoSolicitado:this.idPeliPedido,
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
      this.idPeliPedido=parametros['identificadorC'];
      console.log("idPeliPedido",this.idPeliPedido);

      const consultarPoseedor$= this._httpClient.post("http://localhost:1337/Usuario/obtener",
        {idAuto:this.idPeliPedido});
      consultarPoseedor$.subscribe((resultado:any)=>this.idPoseedor=resultado.idUsuario);

      const consultarPeliPedido=this._httpClient.get("http://localhost:1337/Pelicula/obtenerPorIdPelicula/"+this.idPeliPedido);
      consultarPeliPedido.subscribe((auto)=>this.peliPedido=auto);
    });

    const recuperarIdUsuario= this._activatedRouter.parent.params;
    recuperarIdUsuario.subscribe((parametros)=>{
      this.identificador=parametros['idUsuario'];

      const consultarUsuario$= this._httpClient.post("http://localhost:1337/Usuario/obtener",
        {idUsuario:this.identificador});
      consultarUsuario$.subscribe((usuario:any)=>{
        this.usuario=usuario;

        const obtenerAutos$=this._httpClient.post("http://localhost:1337/Actor/obtenerAutos",
          {identificador:this.usuario.conductores[0].id});

        obtenerAutos$.subscribe((conductorConAutos:any)=>{
          this.autos=conductorConAutos.autos;
        });
      });
    });
  }



}
