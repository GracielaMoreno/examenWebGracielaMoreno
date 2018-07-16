import { Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {PeliculasEntity} from "./peliculas.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PeliculaService {

    listaPeliculas = [
        {'id': 1, 'nombrePelicula': 'rapidos y furiosos', 'anioLanzamiento': 2018, 'rating': 1,'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith', 'estado': false, 'urlPelicula': 'http://es.web.img3.acsta.net/c_215_290/pictures/14/04/24/11/37/214528.jpg','actorId':1},
        {'id': 2, 'nombrePelicula': 'toy story', 'anioLanzamiento': 2018, 'rating': 2, 'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith', 'estado': false, 'urlPelicula': 'http://es.web.img3.acsta.net/c_215_290/pictures/17/12/11/16/55/1011025.jpg','actorId':1},
        {'id': 3, 'nombrePelicula': 'bob esponja', 'anioLanzamiento': 2018, 'rating': 22, 'autoresPrincipales': 'Will Smith', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'http://es.web.img2.acsta.net/c_215_290/pictures/15/01/21/10/16/138096.jpg','actorId':2},
        {'id': 4, 'nombrePelicula': 'x-men', 'anioLanzamiento': 2018, 'rating': 3, 'autoresPrincipales': 'nose', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':5},
        {'id': 5, 'nombrePelicula': 'esposa prestada', 'anioLanzamiento': 2018, 'rating': 4,  'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith', 'estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':4},
        {'id': 6, 'nombrePelicula': 'en busca de la felicidad', 'anioLanzamiento': 2018, 'rating': 5, 'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith', 'estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':1},
        {'id': 7, 'nombrePelicula': 'soy leyenda', 'anioLanzamiento': 2018, 'rating':  5,  'autoresPrincipales': 'nose', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':3},
        {'id': 8, 'nombrePelicula': 'hombred de negro', 'anioLanzamiento': 2018, 'rating':  5,  'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':2},
        {'id': 9, 'nombrePelicula': 'Escuadron Suicida', 'anioLanzamiento': 2018, 'rating':  5, 'autoresPrincipales': 'Will Smith', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':2},
        {'id': 10, 'nombrePelicula': 'Belleza inesperada', 'anioLanzamiento': 2018, 'rating':  5, 'autoresPrincipales': 'Will Smith','sinopsis': 'Will Smith', 'estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':1},
        {'id': 11, 'nombrePelicula': '7 almas', 'anioLanzamiento': 2018, 'rating': 6,  'autoresPrincipales': 'Will Smith', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':3},
        {'id': 12, 'nombrePelicula': 'la verdad oculta', 'anioLanzamiento': 2018, 'rating':  5,  'autoresPrincipales': 'Will Smith', 'sinopsis': 'Will Smith','estado': false, 'urlPelicula': 'https://st-listas.20minutos.es/images/2011-11/308615/3237413_640px.jpg?1320350682','actorId':6}
    ];

    constructor(@InjectRepository(PeliculasEntity)
                private readonly peliRepository: Repository<PeliculasEntity>){
    }

    crearPeliculas() {
        for(var peliculas in this.listaPeliculas) {
            const pelicula = new PeliculasEntity();
           pelicula.id = this.listaPeliculas[peliculas].id;
            pelicula.nombrePelicula = this.listaPeliculas[peliculas].nombrePelicula;
            pelicula.anioLanzamiento = this.listaPeliculas[peliculas].anioLanzamiento;
            pelicula.rating = this.listaPeliculas[peliculas].rating;
            pelicula.autoresPrincipales =this.listaPeliculas[peliculas].autoresPrincipales;
            pelicula.sinopsis= this.listaPeliculas[peliculas].sinopsis;
            pelicula.estado =  this.listaPeliculas[peliculas].estado;
            pelicula.urlPelicula = this.listaPeliculas[peliculas].urlPelicula;
            const peli=new PeliculasEntity();
            peli.id= this.listaPeliculas[peliculas].actorId;
            pelicula.actorId=peli;
            this.peliRepository.save(pelicula);
        }
        return this.peliRepository.find();
    }

    async traerTodos(): Promise<PeliculasEntity[]> {
        return await this.peliRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.peliRepository.find({ nombrePelicula: Like("%" + parametroBusqueda + "%") });
    }


}
