import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {PeliculaService,Pelicula} from "./pelicula.service";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";
import {PELICULA_SCHEMA} from "./pelicula.schema";

@Controller('Pelicula')
export class PeliculaController {
  constructor(private Peliculaservice:PeliculaService){

    }
@Get('Pelicula')
    mostrarTodos(){
        return this.Peliculaservice.arregloPeliculas
}
//@UsePipes(new  PipesApp(PELICULA_SCHEMA))
@Post('Pelicula')
    crearPeliculas(@Body(new  PipesApp(PELICULA_SCHEMA))bodyparams,@Res()res,@Req()req){

            const Actor=new Pelicula(bodyparams.identificadorPelicula,bodyparams.nombre,bodyparams.anioLanzamiento,bodyparams.rating,bodyparams.actoresPrincipales,bodyparams.sinopsis,bodyparams.actorId);
            return res.send(this.Peliculaservice.crearPelicula(Actor));

    }


    @Get('Pelicula/:id')
    obtenerUnaPelicula(@Res()res,@Req()req,@Param()param){
        const validar= (param.id);
        if(validar){
        const resultadoPeli=this.Peliculaservice.obtenerUnaPelicula(param.id);
        return res.send(resultadoPeli);
        }else{
            return res.send({mensaje:' No se encontro el elemento' })
        }

    }
    @Put('Pelicula/:id')
    editarUnaPelicula(@Body()bodyParams,@Res()res,@Param()param){
        const resultado=this.Peliculaservice.editarUno(param.id,bodyParams.nombre,bodyParams.anioLanzamiento,bodyParams.rating,bodyParams.actoresPrincipales,bodyParams.sinopsis,bodyParams.actorId)
        return res.send(resultado);
    }

}