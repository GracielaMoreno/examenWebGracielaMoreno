import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {Actor,ActoresService} from "./actores.service";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "./actores.schema";




@Controller()
export class ActoresController {

    constructor(private _actoresService:ActoresService){

    }

    @Get('Actor')
    listarTodos(){
        return this._actoresService.arregloActores;
    }
    //@UsePipes(new  PipesApp(ACTOR_SCHEMA))
    @Post('CrearActor')
    crearActor(@Body((new  PipesApp(ACTOR_SCHEMA)))bodyParams,@Res()res,@Req() req){
            const actor = new  Actor(bodyParams.idActor, bodyParams.nombres, bodyParams.apellidos, bodyParams.fechaNacimiento, bodyParams.numeroPeliculas, bodyParams.retirado);
            return res.send(this._actoresService.crearActor(actor));
    }

    @Get('mostrarActores/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const validar= (parametros.id);
        if(validar){
            const resultadoPeli=this._actoresService.obtenerUnAutor(parametros.id);
            return res.send(resultadoPeli);
        }else{
            return res.send({mensaje:' No se encontro el elemento' })
        }

    }

    @Put('modificarActor/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const resultado=this._actoresService.editarUnAutor(parametro.idActor,bodyParams.nombres, bodyParams.apellidos, bodyParams.fechaNacimiento, bodyParams.numeroPeliculas, bodyParams.retirado);
        return res.send(resultado);
    }
}