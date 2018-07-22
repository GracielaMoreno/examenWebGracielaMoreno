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

    @Get('/:nombreArgumento/:contrasena')
    async buscarPorNombre(
        @Param() paramParams,
        @Res() response
    ) {
        let usuario = await this._usuarioService.obtenerUserPorNombreUser(paramParams.nombreArgumento);

        if (usuario.passUser === paramParams.contrasena) {
            return response.send( usuario );
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

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._usuarioService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

  @Get('por/id/:idUsuario')
  async obtenerUsuarioPorId(
    @Param() paramParams,
    @Res() response
  ) {
    const usuario = await this._usuarioService.obtenerUsuarioPorId(paramParams.idUsuario);
    return response.send(usuario);
  }

}