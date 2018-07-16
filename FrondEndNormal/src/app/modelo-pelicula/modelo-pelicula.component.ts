import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pelicula} from "../Conexion/peliculas.service";


@Component({
  selector: 'app-modelo-pelicula',
  templateUrl: './modelo-pelicula.component.html',
  styleUrls: ['./modelo-pelicula.component.css']
})
export class ModeloPeliculaComponent implements OnInit {

  peliculas:Pelicula[];
  contador=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Pelicula[]>('http://localhost:3000/Pelicula').subscribe((data: Pelicula[]) => {
      this.peliculas = data;
    });
  }


  seleccionar(){

  }
}
