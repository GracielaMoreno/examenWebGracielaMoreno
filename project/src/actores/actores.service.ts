import {Injectable} from '@nestjs/common';
import {getConnection, Like, Repository} from "typeorm";
import {ActoresEntity} from "./actores.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class ActoresService {

ArregloAcores=[
    {'id': 1, 'nombres': 'Will ', 'apellidos': 'Smith', 'fechaNacimiento': ' 25 de septiembre de 1968', 'numeroPeliculas': 49, 'retirado': false, 'urlActores': 'https://cinepremiere-impresionesaerea.netdna-ssl.com/galerias/2012/05-mayo/carru-will0.jpg','usuarioId':1},
    {'id': 2, 'nombres': 'Johnny', 'apellidos': 'Depp', 'fechaNacimiento': '9 de junio de 1963 ', 'numeroPeliculas': 76, 'retirado': false,'urlActores':  'http://filmowo.net/wp-content/uploads/2016/05/jack_sparrow.jpg','usuarioId':2},
    {'id': 3, 'nombres': 'Adam ', 'apellidos': 'Sandler', 'fechaNacimiento': '9 de septiembre de 1966', 'numeroPeliculas': 59, 'retirado': false, 'urlActores': 'https://cde.peru.com//ima/0/0/9/2/5/925972/611x458/adam-sandler.jpg','usuarioId':3},
    {'id': 4, 'nombres': 'Vin ', 'apellidos': 'Diesel', 'fechaNacimiento': ' 18 de julio de 1967', 'numeroPeliculas': 35, 'retirado': false, 'urlActores': 'https://www.lainformacion.com/files/article_main/uploads/2017/09/04/59ad518e97eda.jpeg','usuarioId':4},
    {'id': 5, 'nombres': 'Jackie  ', 'apellidos': 'Chan', 'fechaNacimiento': '7 de abril de 1954 ', 'numeroPeliculas': 133, 'retirado': false, 'urlActores': 'https://cde.peru.com//ima/0/1/0/8/7/1087554/924x530/jackie-chan.jpg','usuarioId':5},
    {'id': 6, 'nombres': 'Morgan ', 'apellidos': 'Freman', 'fechaNacimiento': ' 1 de junio de 1937', 'numeroPeliculas': 119, 'retirado': false, 'urlActores': 'https://static.iris.net.co/semana/upload/images/2015/5/11/427158_125442_1.jpg','usuarioId':6}
    ]


    constructor(@InjectRepository(ActoresEntity)
                private readonly actorRepository: Repository<ActoresEntity>){

    }

    crearComidas() {
        for(var actores in this.ArregloAcores) {
            const actor = new ActoresEntity();
            actor.id = this.ArregloAcores[actores].id;
            actor.nombres = this.ArregloAcores[actores].nombres;
            actor.apellidos = this.ArregloAcores[actores].apellidos;
            actor.fechaNacimiento= this.ArregloAcores[actores].fechaNacimiento ;
            actor.numeroPeliculas =this.ArregloAcores[actores].numeroPeliculas;
            actor.retirado = this.ArregloAcores[actores].retirado;
            actor.urlActores =  this.ArregloAcores[actores].urlActores;
            const usuario =new UsuarioEntity();
            usuario.id=this.ArregloAcores[actores].usuarioId;
            actor.usuarioId=usuario;
            this.actorRepository.save(actor);
        }
        return this.actorRepository.find();
    }


   async ObtenerTodos(): Promise<ActoresEntity[]> {
        return await this.actorRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.actorRepository.find({ nombres: Like("%" + parametroBusqueda + "%") });
    }
    /*
        async traercinco(): Promise<ActoresEntity[]> {
            return await this.actorRepository.find({ relations: ["actorId"] ,  skip: 0, take: 2});
        }

        async traeSiguiente(): Promise<ActoresEntity[]> {
            return await this.actorRepository.find({ relations: ["actorId"] ,  skip: 3, take: 5});
        }

        async traerDos(): Promise<ActoresEntity[]> {
            return await this.actorRepository.find({ relations: ["actorId"] ,  skip: 6, take: 8});
        }

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
    */
}