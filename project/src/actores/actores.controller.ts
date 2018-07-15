import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {Actor,ActoresService} from "./actores.service";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "./actores.schema";

import{ActoresEntity} from "./actores.entity";
import {getConnection} from "typeorm";


@Controller()
export class ActoresController {

    constructor(private _actoresService:ActoresService){

    }

    @Get('Actor')
    listarTodos(@Res()response){
        return this._actoresService.listartodo(response);
    }


    @Post('Actor')
    crearActor(@Body('id')id,@Body('nombre')nombres,@Body('apellido')apellidos,
        @Body('fechaNcimiento')fechaNacimiento,@Body('numeroPeliculas')numeroPeliculas,
        @Body('retirado')retirado,@Body('urlActores')urlActores,
        @Res()res,@Req() req){
            const UsuariosRepository=getConnection().getRepository(ActoresEntity);
            const actor=UsuariosRepository.create(req.body);
            return UsuariosRepository.save(actor);
    }

    @Get('Actor/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const existe = parametros.id;
        if (existe != null) {
            const autor = this._actoresService.obtenerUno(parametros.id);
            return res.send(autor);
        } else {
            return res.send({ mensaje: 'Id de autor no ha sido encontrado' });
        }

    }

    @Put('Actor/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const resultado=this._actoresService.editarUnAutor(parametro.idActor,bodyParams.nombres, bodyParams.apellidos, bodyParams.fechaNacimiento, bodyParams.numeroPeliculas, bodyParams.retirado);
        return res.send(resultado);
    }
}