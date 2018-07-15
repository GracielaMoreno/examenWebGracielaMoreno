import { Injectable, Req } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {


    arregloUsuario: Usuario[] = [];


    constructor(@InjectRepository(UsuarioEntity)
                private readonly userRepository: Repository<UsuarioEntity>) {

    }

    async findAll(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find();
    }

    async obtenerCinco(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find({ relations: ["userActor"],  skip: 0, take: 4 });
    }
    async obtenerSiguientes(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find({ relations: ["userActor"],  skip: 5, take: 9 });
    }

    crearUser(usuario: Usuario): Usuario[] {
        this.arregloUsuario.push(usuario);
        return this.arregloUsuario;
    }

    async conexion() {
        return await getConnection().getRepository(UsuarioEntity).find();
    }

    async insertar(@Req() req) {
        const usuarioPeliculas = getConnection().getRepository(UsuarioEntity).create(req.body);
        return getConnection().getRepository(UsuarioEntity).save(usuarioPeliculas);
    }

}

export class Usuario {
    constructor(
        public id: number,
        public nombreUser: string,
        public urlUser: any,
        public correoUser: any,
    ) {
    }
}