import {Component, Input, OnInit} from '@angular/core';
import {ActorService} from "../../conexion/actor.service";


@Component({
  selector: 'app-componente-actor',
  templateUrl: './componente-actor.component.html',
  styleUrls: ['./componente-actor.component.css']
})
export class ComponenteActorComponent implements OnInit {
  urlImagen="/assets/imagenes/2.PNG"
  constructor() { }
  @Input()
  nombres:string;

  @Input()
  urlImage:string;

  @Input()
  apellidos:string;

  @Input()
  numeroDePeliculas:number;
  ngOnInit() {

  }

}
