import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {ActoresService} from "./actores.service";
import{ActoresEntity} from "./actores.entity";



@Controller('Actor')
export class ActoresController {

    constructor(private _actoresService:ActoresService){

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
        const actores = this._actoresService.crearComidas();
        return actores;
    }
  @Get('/porUsuario/:idUsuario')
  async obtenerComidaPorUsuario(
    @Param() paramParams,
    @Res() response
  ) {
    const usuarios = await this._actoresService.traerPeliculaPorUsuario(paramParams.idUsuario);
    return response.send(usuarios);
  }


}