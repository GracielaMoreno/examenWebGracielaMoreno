import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  identificador:string="0";
  peticiones=[];
  ofrecimientos=[];
  //parametrosRuta$ = this._activateRoute.params;
  nombreUsuario;

  constructor(private _httpClient:HttpClient,
              private _activateRoute:ActivatedRoute) { }

  @Input()
  nick:string="Usuario";

  @Input()
  urlImagen:string="/assets/imagenes/1.png";


  ngOnInit() {

    const recuperarIdUsuario= this._activateRoute.parent.params;
    recuperarIdUsuario.subscribe((parametros)=>{
      this.identificador=parametros['idUsuario'];

      const obtenerOfrecimientos=this._httpClient.post(
        "http://localhost:1337/Usuario/ofrecimientos",
        {identificador:this.identificador});

      obtenerOfrecimientos.subscribe((ofrecimientos:any)=>{this.ofrecimientos=ofrecimientos;
          console.log("identificador",this.identificador);
          console.log("ofreci",this.ofrecimientos);},
        (error)=>console.log(error));

      const obtenerPeticiones=this._httpClient.post(
        "http://localhost:1337/Usuario/solicitudes",
        {identificador:this.identificador});

      obtenerPeticiones.subscribe((peticiones:any)=> { this.peticiones=peticiones;
          console.log("identificador",this.identificador);
          console.log("peti",this.peticiones);},
        (error)=>console.log(error));

      const obtenerUsuario$ =
        this._httpClient.post("http://localhost:1337/Usuario/obtener",
          {idUsuario:this.identificador});

      obtenerUsuario$.subscribe((usuario:any)=>this.nombreUsuario=usuario.nick);

    });


  }

}
