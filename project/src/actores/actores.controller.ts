import {Body, Controller, Get, HttpCode, Param, Post, Put, Query, Req, Res, UsePipes} from '@nestjs/common';
import {ActoresService} from "./actores.service";
import{ActoresEntity} from "./actores.entity";
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada";
import {UsuarioService} from "../Usuario/usuario.service";
import{UsuarioEntity} from "../Usuario/usuario.entity";


@Controller('Actor')
export class ActoresController {

    constructor(private _actoresService:ActoresService,private _usuarioService:UsuarioService){

    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const actores = await this._actoresService.ObtenerTodos();
        return response.send(actores);
    }

    @Post()
    async crearComidaBase() {
        const actores = this._actoresService.crearActores();
        return actores;
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._actoresService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('obtenerPorIdActor/:indice')
    async obtenerUno(@Param() Params){

        const conductor =await this._actoresService.obtenerActor(Params.indice);
        console.log(conductor);
        if(conductor){
            return conductor;
        }else{
            throw new NoIdentificada(
                "Conductor no encontrado",
                "",
                4)
        }
    }

    @Get('obtenerPorUsuario')
    async obtenerConductor(@Query('idUsuario')idUsuario){
        return await this._usuarioService.obtenerActores(idUsuario);
    }

    @Post('obtenerAutos')
    async obtenerAutos(@Body('identificador')identificadar){
        return await this._actoresService.obtenerPeliculas(identificadar);
    }

}