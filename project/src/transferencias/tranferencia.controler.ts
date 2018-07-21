import {Body, Controller, Get, Param, Post, Put, Query, Req, Res, UsePipes} from "@nestjs/common";
import {TransferenciasEntity} from "./transferencias.entity";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";

import {getConnection} from "typeorm";

import {TrnaferenciaService} from "./trnaferencia.service";

@Controller('Tranferencias')
export class TranferenciaControler {
    constructor(private TranferenciaService:TrnaferenciaService){

    }
    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const peliculas = await this.TranferenciaService.ObtenerTodos();
        return response.send(peliculas);
    }

    @Post()
    async crearTransfeBase() {
        const peliculas = this.TranferenciaService.crearPeticion();
        return peliculas;
    }


   /* @Get('porActor/:idUsuario')
    async obtenerPeliculasPorActor(
        @Param() paramParams,
        @Res() response
    ) {
        const peli = await this.TranferenciaService.traerTransaccionesPorUsuario(paramParams.idUsuario);
        return response.send(peli);
    }*/

    @Get('aceptar')
    async aceptarPeticion(@Query('identificador')identificador){
        return await this.TranferenciaService.aceptarPeticion(identificador);
    }

   @Get('rechazar')
    async rechazarPeticion(@Query('identificador')identificador){
        return await this.TranferenciaService.rechazarPeticion(identificador);

    }
  @Get('crear')
    async crear(@Query('idPeliOfrecido')idPeliOfrecido,
                @Query('idPeliSolicitado')idPeliSolicitado,
                @Query('idPoseedor')idPoseedor,
                @Query('idOfrece')idOfrece,){
        return await this.TranferenciaService.crearPeticiondesdeFront(idPeliOfrecido,idPeliSolicitado,idPoseedor,idOfrece);
    }

    @Get('obtener')
    async obtener(@Query('identificador')identificador){
        return await this.TranferenciaService.obtener(identificador);
    }

}