import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ActoresEntity } from '../actores/actores.entity';
import {TransferenciasEntity} from "../transferencias/transferencias.entity";
@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn() id: number;

    @Column({ length: 450 })
    nombreUser: string;

    @Column({ length: 450 })
    passUser: string;

    @Column({ length: 450 })
    urlUser: string;

    @OneToMany(type => ActoresEntity, actor=>actor.usuarioId)

    actores:ActoresEntity[];

    @OneToMany(type => TransferenciasEntity,pet=>pet.usuarioSolicita)
    solicitudes:TransferenciasEntity;

    @OneToMany(type => TransferenciasEntity,pet=>pet.usuarioOfrece)
    ofrecimientos:TransferenciasEntity;



}