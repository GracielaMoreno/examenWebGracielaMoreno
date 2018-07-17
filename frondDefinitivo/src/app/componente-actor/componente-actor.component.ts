import { Component, OnInit } from '@angular/core';
import {ActorService} from '../conexion/actor.service';

@Component({
  selector: 'app-componente-actor',
  templateUrl: './componente-actor.component.html',
  styleUrls: ['./componente-actor.component.css']
})
export class ComponenteActorComponent implements OnInit {
  listaActores = [];
  numeroItems = 2;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;
  constructor(private _actorService: ActorService) { }

  ngOnInit() {
    this._actorService.getActor().subscribe(
      (result: any[]) => {
        this.listaActores = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }
  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaActores.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaActores.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }
}
