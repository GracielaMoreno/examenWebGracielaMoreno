import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';
import { ActoresEntity } from '../actores/actores.entity';
import { getConnection, getRepository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Controller()
export class UsuarioController {
    constructor(private _usuarioService: UsuarioService) {
    }

    @Get('usuario')
    async mostrarDatos(@Res() response){
        this._usuarioService.listartodo(response);
    }


    @Post('usuario')
    mostrar(@Body('id') id,
            @Body('nombreUser') nombreUser,
            @Body('urlUser') urlUser, @Req() req) {
        const userRepository = getConnection().getRepository(UsuarioEntity);
        const usuarioPeliculas = userRepository.create(req.body);
        return userRepository.save(usuarioPeliculas);
    }
}