import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PeliculasEntity} from '../pelicula/peliculas.entity'
import {UsuarioEntity} from "../Usuario/usuario.entity";
@Entity('Actor')
export class ActoresEntity{
    @PrimaryGeneratedColumn()id:number;
    @Column({length:100})
    nombres :string;
    @Column({length:100})
    apellidos:string;
    @Column({length:100})
    fechaNacimiento :string;
    @Column({})
    numeroPeliculas :number;
    @Column()
    retirado :boolean;
    @Column({length: 200})
    urlActores: string;

    @OneToMany(type => PeliculasEntity,pel=>pel.actor)
    peliculaId:PeliculasEntity[];

   @ManyToOne(type => UsuarioEntity,pel=>pel.userActor)
    actorId:ActoresEntity;


}