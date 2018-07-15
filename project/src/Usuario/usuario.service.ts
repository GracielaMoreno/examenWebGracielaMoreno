import { Injectable, Req } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';


@Injectable()
export class UsuarioService {

    arregloUsuario: Usuario[] = [];

    async listartodo(response){
        let conex= await getConnection().getRepository(UsuarioEntity).find();
        conex.map(data=>
            {
                this.crearUser(new Usuario(data.id, data.nombreUser, data.urlUser));
            },
        );
        return  response.send(this.arregloUsuario);
    }

    crearUser(usuario: Usuario): Usuario[] {
        this.arregloUsuario.push(usuario);
        return this.arregloUsuario;
    }
    async conexion(){
        return await getConnection().getRepository(UsuarioEntity).find();
    }

    async insertar(@Req() req){
        const usuarioPeliculas = getConnection().getRepository(UsuarioEntity).create(req.body);
        return getConnection().getRepository(UsuarioEntity).save(usuarioPeliculas);
    }

}
export class Usuario {
    constructor(
        public id: number,
        public nombreUser:string,
        public urlUser:any,
    ){
    }}