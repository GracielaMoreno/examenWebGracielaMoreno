import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";

import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";
import {PELICULA_SCHEMA} from "./pelicula.schema";
import {getConnection} from "typeorm";
import {PeliculasEntity} from "./peliculas.entity";
import {PeliculaService} from "./pelicula.service";

@Controller('Pelicula')
export class PeliculaController {
  constructor(private Peliculaservice:PeliculaService){

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
    async crearComidaBase() {
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

}