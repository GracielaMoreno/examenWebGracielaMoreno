import {Injectable} from '@nestjs/common';

@Injectable()
export class ActoresService {

arregloAutores:Actor[]=[];

crearAutor(autores:Actor):Actor[]{
    this.arregloAutores.push(autores);
    return this.arregloAutores;
}
listarTodosAutores(){
    return this.arregloAutores;
}
obtenerUnAutor(id){
    return this.arregloAutores[id];
}

editarUnAutor(id,nombres,apellidos,fechaNacimiento,numeroPeliculas,retirado){
    let arregloAutores=this.obtenerUnAutor(id);
    arregloAutores.nombres=nombres,arregloAutores.apellidos=apellidos,arregloAutores.fechaNacimiento=fechaNacimiento,arregloAutores.numeroPeliculas=numeroPeliculas,arregloAutores.retirado=retirado;
return arregloAutores;
};
}


export class Actor{
    constructor( public idAutor:number,
                 public nombres: string,
                 public apellidos: string,
                 public fechaNacimiento: string,
                 public numeroPeliculas: number,
                 public retirado: boolean){}

}