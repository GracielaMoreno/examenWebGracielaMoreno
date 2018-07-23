import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {
  @Input()
  identificador;

  peticion;
  peliSolicitado;
  peliOfrecido;
  usuarioSolicita;
  usuarioOfrece;

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this.consultar();
  }
  aceptarPeticion(id){
    const aceptarPeticion$= this._httpClient.post("http://localhost:3000/Tranferencias/aceptar",
      {identificador:id});

    aceptarPeticion$.subscribe(()=>{
      console.log("peticion aceptada");
      this.consultar();
    });
  }

  rechazarPeticion(id){
    const rechazarPeticion$= this._httpClient.post("http://localhost:1337/Tranferencias/rechazar",
      {identificador:id});

    rechazarPeticion$.subscribe(()=>{
      console.log("peticion rechazada");
      this.consultar();
    });
  }

  consultar(){
    const cargarPeticion$=this._httpClient.post(
      'http://localhost:1337/Tranferencias/obtener',
      {identificador:this.identificador}
    );

    cargarPeticion$.subscribe(
      (peticion:any)=>{
        this.peticion=peticion;
        this.peliSolicitado=peticion.peliSolicitado;
        this.peliOfrecido=peticion.peliOfrecido;
        this.usuarioSolicita=peticion.usuarioSolicita;
        this.usuarioOfrece=peticion.usuarioOfrece;
      });
  }
}
