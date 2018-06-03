
import { Injectable} from "@nestjs/common";
@Injectable()
export class PeliculaService {

arregloPeliculas:Pelicula[]=[];

crearPelicula(pelicula:Pelicula):Pelicula[]{
    this.arregloPeliculas.push(pelicula);
    return this.arregloPeliculas;
}
buscarActor(id){
    const actores = this.arregloPeliculas.map(pelicula=>{
        const idBuscar=pelicula.actorId;
        return idBuscar;
    });
}
listarTodos(){
    return this.arregloPeliculas;
}
obtenerUnaPelicula(id){
    return this.arregloPeliculas[id];
}
editarUno(id,nombre,anioLanzamiento,rating,actoresPrincipales,sinopsis,actorId){
    let arregloPleiculas=this.obtenerUnaPelicula(id);
    arregloPleiculas.identificadorPelicula=id;
    arregloPleiculas.nombre=nombre;
    arregloPleiculas.anioLanzamiento=anioLanzamiento;
    arregloPleiculas.rating=rating;
    arregloPleiculas.actoresPrincipales=actoresPrincipales;
    arregloPleiculas.sinopsis=sinopsis;
    arregloPleiculas.actorId;
    return arregloPleiculas;
};


}

export class Pelicula {
    constructor(
        public identificadorPelicula:number,
        public nombre:string,
        public anioLanzamiento:number,
        public rating:number,
        public actoresPrincipales:string,
        public sinopsis:string,
        public actorId: number,
    ){};

}