import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../conexion/pelicula.service';

@Component({
  selector: 'app-componente-pelicula',
  templateUrl: './componente-pelicula.component.html',
  styleUrls: ['./componente-pelicula.component.css']
})
export class ComponentePeliculaComponent implements OnInit {

  listaPeloiculas = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;
  constructor(private _peliculaService: PeliculaService) { }

  ngOnInit() {
    this._peliculaService.getPelicula().subscribe(
      (result: any[]) => {
        this.listaPeloiculas = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }
  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaPeloiculas.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaPeloiculas.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
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
