import {Injectable} from '@nestjs/common';
import {getConnection} from "typeorm";
import {ActoresEntity} from "./actores.entity";


@Injectable()
export class ActoresService {

arregloActores:Actor[]=[];

crearActor(actores:Actor):Actor[]{
    this.arregloActores.push(actores);
    return this.arregloActores;
}




obtenerUno(id){
    return this.arregloActores[id];
}

    async listartodo(response){
        let conex= await getConnection().getRepository(ActoresEntity).find();
        let conex2= await getConnection().getRepository(ActoresEntity).find( { relations: ["pacienteId"] });
        let idTomado;
        conex2.map(dato=>{
            idTomado=dato.actorId
        });
        conex.map(data=>
            {
                console.log(data.actorId);
                console.log();
                this.crearActor(new Actor(Number(data.actorId),data.nombres,data.apellidos,data.fechaNacimiento,Number(data.numeroPeliculas),Boolean(data.retirado),data.urlActores,idTomado));
            },
        );
        return  response.send(this.arregloActores);
    }
    editarUnAutor(id,nombres,apellidos,fechaNacimiento,numeroPeliculas,retirado){
        let arregloActores=this.obtenerUno(id);
        arregloActores.nombres=nombres,arregloActores.apellidos=apellidos,arregloActores.fechaNacimiento=fechaNacimiento,arregloActores.numeroPeliculas=numeroPeliculas,arregloActores.retirado=retirado;
        return arregloActores;
    };
}


    export class Actor{
    constructor(
                public idActor: number,
                 public nombres: string,
                 public apellidos: string,
                 public fechaNacimiento: string,
                 public numeroPeliculas: number,
                 public retirado: boolean,
                 public urlActores:string,
                 public actorId:number)
    {}

}