import { Injectable, Req } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {


   ArregloUsuarios= [
       {'id': 1, 'nombreUser': 'Liliana', 'passUser': '1234', 'urlUser': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-1-1.jpg'},
       {'id': 2, 'nombreUser': 'Maria', 'passUser': '1234', 'urlUser': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-8-1.jpg'},
       {'id': 3, 'nombreUser': 'Ximena', 'passUser': '1234', 'urlUser': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-5-1.jpg'},
       {'id': 4, 'nombreUser': 'Mariela', 'passUser': '1234', 'urlUser': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-4-1.jpg'},
       {'id': 5, 'nombreUser': 'Fernando', 'passUser': '1234', 'urlUser': 'https://static.ellahoy.es/r/845X0/www.ellahoy.es/img/perfil-del-hombre-infiel.jpg'},
       {'id': 6, 'nombreUser': 'Jonathan', 'passUser': '1234', 'urlUser': 'https://static.ellahoy.es/845x500/www/ellahoy/es/img/detalles-de-infieles4.jpg'},
       {'id': 7, 'nombreUser': 'Rocio', 'passUser': '1234', 'urlUser': 'http://arqa.com/comunidad/wp-content/uploads/sites/3/avatars/120644/59194d4444e8a-bpfull.jpg'},
       {'id': 8, 'nombreUser': 'Graciela', 'passUser': '1234', 'urlUser': 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-9/26219505_1673267116028362_3405147687524622913_n.jpg?_nc_cat=0&_nc_eui2=AeEAh7ECt0X7OXlMEfz_sny3VDu4kZdy5Y7pGX7H0Y2F5UsvA__zeAp2TYV7Y1JgRjon8ftc-WvEGShRlD3rmJ5d-2-a5tqwx-fYjLZlB1z9Lw&oh=cc7fc9ee13eb81868130bb8629c2443b&oe=5BEB5985'}

   ];



    constructor(@InjectRepository(UsuarioEntity)
                private readonly userRepository: Repository<UsuarioEntity>) {

    }
//traer todos los objetos
    async findAll(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find();
    }


    crearUser() {
        for(var usuarios in this.ArregloUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.ArregloUsuarios[usuarios].id;
            usuario.nombreUser = this.ArregloUsuarios[usuarios].nombreUser;
            usuario.passUser = this.ArregloUsuarios[usuarios].passUser;
            usuario.urlUser = this.ArregloUsuarios[usuarios].urlUser;
            this.userRepository.save(usuario);
        }
        return this.userRepository.find();
    }
//obtener solo el usuaro con el nombre
    async obtenerUserPorNombreUser(nombreEntrada) {
        return await this.userRepository.
        createQueryBuilder("usuario").where("usuario.nombreUser = :nombreUser", { nombreUser: nombreEntrada }).getOne();
    }
    /*async obtenerCinco(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find({ relations: ["userActor"],  skip: 0, take: 4 });
    }
    async obtenerSiguientes(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find({ relations: ["userActor"],  skip: 5, take: 9 });
    }
    async conexion() {
        return await getConnection().getRepository(UsuarioEntity).find();
    }

    async insertar(@Req() req) {
        const usuarioPeliculas = getConnection().getRepository(UsuarioEntity).create(req.body);
        return getConnection().getRepository(UsuarioEntity).save(usuarioPeliculas);
    }
*/
}
