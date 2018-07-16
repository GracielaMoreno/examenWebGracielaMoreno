import {Injectable} from "@angular/core";


@Injectable()
export class PeliculasService {


}
export interface Pelicula {
  identificadorPelicula: number;
  nombre: string;
  anioLanzamiento: number;
  rating: number;
  autoresPrincipales: string;
  sinopsis: string;
  estado: boolean;
  urlPelicula: string;

}
