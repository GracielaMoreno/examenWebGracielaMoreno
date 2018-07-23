import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-componente-ofrecimiento',
  templateUrl: './componente-ofrecimiento.component.html',
  styleUrls: ['./componente-ofrecimiento.component.css']
})
export class ComponenteOfrecimientoComponent implements OnInit {

  constructor(private _httpClient:HttpClient) { }
  @Input()
  identificador;

  peticion;
  peliSolicitado;
  peliOfrecido;
  usuarioSolicita;
  usuarioOfrece;


  ngOnInit() {
    this.consultar();
  }
  aceptarPeticion(id){
    const aceptarPeticion$= this._httpClient.post("http://localhost:1337/Peticion/aceptar",
      {identificador:id});

    aceptarPeticion$.subscribe(()=>{
      console.log("peticion aceptada");
      this.consultar();
    });
  }

  rechazarPeticion(id){
    const rechazarPeticion$= this._httpClient.post("http://localhost:1337/Peticion/rechazar",
      {identificador:id});

    rechazarPeticion$.subscribe(()=>{
      console.log("peticion rechazada");
      this.consultar();
    });
  }

  consultar(){
    const cargarPeticion$=this._httpClient.post(
      'http://localhost:1337/Peticion/obtener',
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
