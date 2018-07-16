import {Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada";
import {UsuarioEntity} from "./usuario.entity";
@Controller('usuario')
export class UsuarioController {
    constructor(private _usuarioService: UsuarioService) {
    }



    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const usuarios = await this._usuarioService.findAll();
        return response.send(usuarios);
    }

    @Get('/:nombreEntrada/:contrasena')
    async buscarPorNombre(
        @Param() paramParams,
        @Res() response
    ) {
        let usuario = await this._usuarioService.obtenerUserPorNombreUser(paramParams.nombreEntrada);

        if (usuario.passUser === paramParams.contrasena) {
            return response.send(
                {respuesta: 'Aceptado'});
        } else {
            throw new NoIdentificada (
                'No coinciden los datos',
                'error',
                4
            )
        }
    }

    @Post()
    async crearUsersFijos() {
        const usuarios = this._usuarioService.crearUser();
        return usuarios;
    }


   /* @Get('cincoUsuarios')
    mostrarCinco():Promise<UsuarioEntity[]> {
        return this._usuarioService.obtenerCinco();
    }
    @Get('cincoSiguientes')
    mostrarSiguientes():Promise<UsuarioEntity[]> {
        return this._usuarioService.obtenerSiguientes();
    }
    @Get('usuario')
    findAll(): Promise<UsuarioEntity[]> {
        return this._usuarioService.findAll();
    }

    @Post('usuario')
    mostrar(@Body('id') id,
            @Body('nombreUser') nombreUser,
            @Body('urlUser') urlUser, @Req() req) {
        const userRepository = getConnection().getRepository(UsuarioEntity);
        const usuarioPeliculas = userRepository.create(req.body);
        return userRepository.save(usuarioPeliculas);
    }*/
}