import {Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada";
import {UsuarioEntity} from "./usuario.entity";
import {ActoresService} from "../actores/actores.service";
import {PeliculaService} from "../pelicula/pelicula.service";
import {TransferenciasEntity} from "../transferencias/transferencias.entity";

@Controller('usuario')
export class UsuarioController {
    constructor(private _usuarioService: UsuarioService,private  _actoresService:ActoresService,private _peliculaService:PeliculaService) {
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
    @Post('solicitudes')
    async solicitudes(@Body('identificador')identificador){
        return await  this._usuarioService.obtenerSolicitudes(identificador)
    }

    @Post('ofrecimientos')
    async ofrecmientos(@Body('identificador')identificador){
        return await  this._usuarioService.obtenerOfrecimientos(identificador)
    }

    @Post('obtener')
    async obtener(@Body('idUsuario')idUsuario){
        return await  this._usuarioService.obtenerUsuario(idUsuario);
    }

    @Post('obtenerPorAuto')
    async obtnerPorAuto(@Body('idPelicula')idPelicula){
        return await this._usuarioService.obtenerPorPelicula(idPelicula);
    }

}