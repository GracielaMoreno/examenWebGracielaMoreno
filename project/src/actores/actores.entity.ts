import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PeliculasEntity} from '../pelicula/peliculas.entity'
import {UsuarioEntity} from "../Usuario/usuario.entity";
@Entity('Actor')
export class ActoresEntity{
    @PrimaryGeneratedColumn()id:number;
    @Column({length:450})
    nombres :string;
    @Column({length:450})
    apellidos:string;
    @Column({length:450})
    fechaNacimiento :string;
    @Column({})
    numeroPeliculas :number;
    @Column({length:20})
    retirado :string;
    @Column({length: 500})
    urlActores: string;

    @OneToMany(type => PeliculasEntity,pel=>pel.actor)
    peliculaId:PeliculasEntity[];

   @ManyToOne(type => UsuarioEntity,pel=>pel.userActor)
    actorId:ActoresEntity;


}