import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-componente-peticion',
  templateUrl: './componente-peticion.component.html',
  styleUrls: ['./componente-peticion.component.css']
})
export class ComponentePeticionComponent implements OnInit {
  @Input()
  identificador;

  peticion;
  peliSolicitado;
  peliOfrecido;
  usuarioSolicita;
  usuarioOfrece;

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    const cargarPeticion$=this._httpClient.post(
      'http://localhost:1337/Peticion/obtener',
      {identificador:this.identificador}
    );

    cargarPeticion$.subscribe(
      (peticion:any)=>{
        this.peticion=peticion;
        this.peliSolicitado=peticion.autoSolicitado;
        this.peliOfrecido=peticion.autoOfrecido;
        this.usuarioSolicita=peticion.usuarioSolicita;
        this.usuarioOfrece=peticion.usuarioOfrece;
        console.log("soli",this.peliSolicitado);
        console.log("ofre",this.peliOfrecido);
      });
  }

}
