import {Component, Input, OnInit} from '@angular/core';
import {PeliculaService} from '../../conexion/pelicula.service';

@Component({
  selector: 'app-componente-pelicula',
  templateUrl: './componente-pelicula.component.html',
  styleUrls: ['./componente-pelicula.component.css']
})
export class ComponentePeliculaComponent implements OnInit {


  constructor() { }
  @Input()
  nombrePelicula:string;

  @Input()
  actoresprincipales:string;

  @Input()
  anioLanzamiento:string;

  @Input()
  rating:number;

  @Input()
  sinopsis:string;

  @Input()
  identificador:string;

  solicitar(identificador){

  }
  ngOnInit() {

  }

}
