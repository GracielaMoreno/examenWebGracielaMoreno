import {Injectable} from '@nestjs/common';

@Injectable()
export class ActoresService {

arregloActores:Actor[]=[];

crearActor(actores:Actor):Actor[]{
    this.arregloActores.push(actores);
    return this.arregloActores;
}
listarTodosAutores(){
    return this.arregloActores;
}
obtenerUnAutor(id){
    return this.arregloActores[id];
}

editarUnAutor(id,nombres,apellidos,fechaNacimiento,numeroPeliculas,retirado){
    let arregloActores=this.obtenerUnAutor(id);
    arregloActores.nombres=nombres,arregloActores.apellidos=apellidos,arregloActores.fechaNacimiento=fechaNacimiento,arregloActores.numeroPeliculas=numeroPeliculas,arregloActores.retirado=retirado;
return arregloActores;
};
}


export class Actor{
    constructor( public idActor: number,
                 public nombres: string,
                 public apellidos: string,
                 public fechaNacimiento: string,
                 public numeroPeliculas: number,
                 public retirado: boolean){}

}