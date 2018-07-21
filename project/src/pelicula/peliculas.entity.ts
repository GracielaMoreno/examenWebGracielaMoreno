import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ActoresEntity} from "../actores/actores.entity";
import {TransferenciasEntity} from "../transferencias/transferencias.entity";
@Entity('pelicula')
export class PeliculasEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:450})
    nombrePelicula:string;
    @Column()
    anioLanzamiento:number;
    @Column()
    rating:number;
    @Column({length:500})
    autoresPrincipales:string;
    @Column({length:600})
    sinopsis:string;
    @Column()
    estado: boolean;
    @Column({length: 500})
    urlPelicula: string;

    @ManyToOne(type => ActoresEntity,actor=>actor.peliculas)
    actorId:PeliculasEntity;

    @OneToMany(type => TransferenciasEntity,peti=>peti.peliculaOfrecido)
    peticionesOfrecidas:PeliculasEntity[];
    @OneToMany(type => TransferenciasEntity,peti=>peti.peliculaSoliocitada)
    peticionesSolicitudes:TransferenciasEntity[];
}