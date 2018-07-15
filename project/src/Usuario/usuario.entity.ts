import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ActoresEntity } from '../actores/actores.entity';
@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn() id: number;

    @Column({ length: 450 })
    nombreUser: string;

    @Column({ length: 450 })
    correoUser: string;

    @Column({ length: 450 })
    urlUser: string;

    @OneToMany(type => ActoresEntity, med=>med.actorId)

    userActor:ActoresEntity[];


}