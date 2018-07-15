
import { Injectable} from "@nestjs/common";
import {getConnection, Repository} from "typeorm";
import {PeliculasEntity} from "./peliculas.entity";
import {InjectRepository} from "@nestjs/typeorm";
@Injectable()
export class PeliculaService {

arregloPeliculas:Pelicula[]=[];


    constructor(@InjectRepository(PeliculaService)
                private readonly peliculaRepository: Repository<PeliculasEntity>){

    }
    async cargarPeliculas(): Promise<PeliculasEntity[]> {
        return await this.peliculaRepository.find();
    }

    async cargarCinco(): Promise<PeliculasEntity[]> {
        return await this.peliculaRepository.find({ relations: ["actor"], skip: 0, take: 4});
    }

    async cargarSiguiente(): Promise<PeliculasEntity[]> {
        return await this.peliculaRepository.find({ relations: ["actor"], skip: 5, take: 9});
    }

crearPelicula(pelicula:Pelicula):Pelicula[]{
    this.arregloPeliculas.push(pelicula);
    return this.arregloPeliculas;
}


async listarAll(response){
    let conexion2=await getConnection().getRepository(PeliculasEntity).find({relations:["actor"]});
    let idObtenido;
    conexion2.map(dato=>{
        idObtenido=dato.actor
    });
    let conexion=await getConnection().getRepository(PeliculasEntity).find();
    conexion.map(data=>{this.crearPelicula(new Pelicula(Number(data.id),data.nombrePelicula,Number(data.anioLanzamiento),Number(data.rating),data.autoresPrincipales,data.sinopsis,Boolean(data.estado),data.urlPelicula,idObtenido));
    },

        );
    return response.send(this.arregloPeliculas);
}




obtenerUno(id){
    return this.arregloPeliculas[id];
}
editarUno(id,nombre,anioLanzamiento,rating,actoresPrincipales,sinopsis,actor,estado,urlPelicula){
    let arregloPleiculas=this.obtenerUno(id);
    arregloPleiculas.identificadorPelicula=id;
    arregloPleiculas.nombre=nombre;
    arregloPleiculas.anioLanzamiento=anioLanzamiento;
    arregloPleiculas.rating=rating;
    arregloPleiculas.autoresPrincipales=actoresPrincipales;
    arregloPleiculas.sinopsis=sinopsis;
    arregloPleiculas.actor=actor;
    arregloPleiculas.estado=estado;
    arregloPleiculas.urlPelicula=urlPelicula;
    return arregloPleiculas;
};


}

export class Pelicula {
    constructor(
        public identificadorPelicula:number,
        public nombre:string,
        public anioLanzamiento:number,
        public rating:number,
        public autoresPrincipales:string,
        public sinopsis:string,
        public estado: boolean,
        public urlPelicula:string,
        public actor:string
    ){};

}