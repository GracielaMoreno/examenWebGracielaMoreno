import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {ActoresEntity} from "../actores/actores.entity";
import {PeliculasEntity} from "../pelicula/peliculas.entity";
import {UsuarioEntity} from "../Usuario/usuario.entity";

@Entity('transferencias')
export class TransferenciasEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(type => PeliculasEntity,peli=>peli.peticionesSolicitudes)
    peliculaSoliocitada:PeliculasEntity;
    @ManyToOne(type => PeliculasEntity,peli=>peli.peticionesOfrecidas)
    peliculaOfrecido:PeliculasEntity;
    @ManyToOne(type => UsuarioEntity,user=>user.solicitudes)
    usuarioSolicita:UsuarioEntity;
    @ManyToOne(type => UsuarioEntity,user=>user.ofrecimientos)
    usuarioOfrece:UsuarioEntity;
}