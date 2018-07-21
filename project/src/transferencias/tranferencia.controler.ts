import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
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
        const peliculas = this.TranferenciaService.crearPeliculas();
        return peliculas;
    }


    @Get('porActor/:idUsuario')
    async obtenerPeliculasPorActor(
        @Param() paramParams,
        @Res() response
    ) {
        const peli = await this.TranferenciaService.traerTransaccionesPorUsuario(paramParams.idUsuario);
        return response.send(peli);
    }


}