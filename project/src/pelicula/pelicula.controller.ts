import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {PeliculaService,Pelicula} from "./pelicula.service";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";
import {PELICULA_SCHEMA} from "./pelicula.schema";
import {getConnection} from "typeorm";
import {PeliculasEntity} from "./peliculas.entity";

@Controller()
export class PeliculaController {
  constructor(private Peliculaservice:PeliculaService){

    }
@Get('Pelicula')
    mostrarTodos(@Res()response){
        return this.Peliculaservice.listarAll(response)
}
//@UsePipes(new  PipesApp(PELICULA_SCHEMA))
@Post('Pelicula')
    crearPeliculas( @Body('id') id,
                    @Body('nombre') nombre,
                    @Body('anioLanzamiento') anioLanzamiento,
                    @Body('rating') rating,
                    @Body('autoresPrincipales')autoresPrincipales,
                    @Body('sinopsis') sinopsis,
                    @Body('estado') estado,
                    @Body('urlPelicula') urlPelicula,
                    @Body('ActorId') ActorId,
                    @Res() res, @Req() req){
    this.Peliculaservice.crearPelicula(new Pelicula(id, nombre, anioLanzamiento,  rating, autoresPrincipales, sinopsis, estado, urlPelicula, ActorId));
    const userRepository = getConnection().getRepository(PeliculasEntity);
    const paciente = userRepository.create(req.body);
    return userRepository.save(paciente);
    }


    @Get('Pelicula/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const validarId= (parametros.id);
        if(validarId!=null){
            const pelicula=this.Peliculaservice.obtenerUno(parametros.id);
            return res.send(pelicula);
        }
        else
        {
            return res.send({mensaje: 'ID no encontrado'})
        }


    }
    @Put('Pelicula/:id')
    editarUno(@Body()bodyParams,@Res()res,@Param()param){
        const resultado=this.Peliculaservice.editarUno(param.id,bodyParams.nombre,bodyParams.anioLanzamiento,bodyParams.rating,bodyParams.actoresPrincipales,bodyParams.sinopsis,bodyParams.estado,bodyParams.urlActores,bodyParams.actorId)
        return res.send(resultado);
    }

}