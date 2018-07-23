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


    @Post()
    async crearTransfeBase() {
        const peliculas = this.TranferenciaService.crearPeticion();
        return peliculas;
    }


    @Post('aceptar')
    async aceptarPeticion(@Body('identificador')identificador){
        return await this.TranferenciaService.aceptarPeticion(identificador);
    }

    @Post('rechazar')
    async rechazarPeticion(@Body('identificador')identificador){
        return await this.TranferenciaService.rechazarPeticion(identificador);

    }

    @Post('crear')
    async crear(@Body('idAutoOfrecido')idPeliOfrecido,
                @Body('idAutoSolicitado')idPeliSolicitado,
                @Body('idPoseedor')idPoseedor,
                @Body('idOfrece')idOfrece,){
        return await this.TranferenciaService.crearPeticiondesdeFront(idPeliOfrecido,idPeliSolicitado,idPoseedor,idOfrece);
    }

    @Post('obtener')
    async obtener(@Body('identificador')identificador){
        return await this.TranferenciaService.obtener(identificador);
    }
}