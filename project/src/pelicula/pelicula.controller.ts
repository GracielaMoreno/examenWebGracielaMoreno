import {Body, Controller, Get, Param, Post, Put, Query, Req, Res, UsePipes} from "@nestjs/common";

import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";
import {PELICULA_SCHEMA} from "./pelicula.schema";
import {getConnection} from "typeorm";
import {PeliculasEntity} from "./peliculas.entity";
import {PeliculaService} from "./pelicula.service";
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada";
import {ActoresService} from "../actores/actores.service";
import {ActoresEntity} from "../actores/actores.entity";

@Controller('Pelicula')
export class PeliculaController {
  constructor(private Peliculaservice:PeliculaService,private actorService:ActoresService){

    }
    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const peliculas = await this.Peliculaservice.traerTodos();
        return response.send(peliculas);
    }

    @Post()
    async crearActorBase() {
        const peliculas = this.Peliculaservice.crearPeliculas();
        return peliculas;
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this.Peliculaservice.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('obtenerPorIdPelicula/:indice')
    obtenerUno(@Param()Params){

        if(this.Peliculaservice.obtenerPeli(Params.indice)){
            return this.Peliculaservice.obtenerPeli(Params.indice);
        }else{
            throw new NoIdentificada(
                "pelicula no encontrado",
                "",
                4
            );
        }
    }

    @Get('obtenerPorActor')
    async obtenerPorConductor(@Query('idActores') idActores){
        const autos=await this.actorService.obtenerPeliculas(idActores);
        if(autos){
            return autos;
        }else{
            throw new NoIdentificada(
                "Auto no encontrado",
                "",
                4
            );
        }
    }

}