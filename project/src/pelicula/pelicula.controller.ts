import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {PeliculaService,Pelicula} from "./pelicula.service";
import {PipesApp} from "../pipes/pipes.app";
import {ACTOR_SCHEMA} from "../actores/actores.schema";
import {PELICULA_SCHEMA} from "./pelicula.schema";

@Controller()
export class PeliculaController {
  constructor(private Peliculaservice:PeliculaService){

    }
@Get('Pelicula')
    mostrarTodos(){
        return this.Peliculaservice.arregloPeliculas
}
@UsePipes(new  PipesApp(PELICULA_SCHEMA))
@Post('Pelicula')
    crearPeliculas(@Body()bodyparams,@Res()res,@Req()req){
        const envIdPelicula=bodyparams.id;
        const envNombre=bodyparams.nombre;
        const envanioLanzamiento=bodyparams.anioLanzamiento;
        const envrating=bodyparams.rating;
        const envactoresPrincipales=bodyparams.actoresPrincipales;
        const envsinopsis=bodyparams.sinopsis;
        const envactorId=bodyparams.actorId;
        const envParametros=(envIdPelicula && envNombre && envanioLanzamiento && envrating && envactoresPrincipales && envsinopsis && envactorId);

        if(envParametros){
            const Actor=new Pelicula(bodyparams.id,bodyparams.nombre,bodyparams.anioLanzamiento,bodyparams.rating,bodyparams.actoresPrincipales,bodyparams.sinopsis,bodyparams.actorId);
            return res.send(this.Peliculaservice.crearPelicula(Actor));

        }else{
            return res
                .status(400).send({mensaje:'No se estan enviando parametros',status:400})
        }
    }


    @Get('Pelicula/:id')
    obtenerUnaPelicula(@Res()res,@Req()req,@Param()param){
        const resultadoPeli=this.Peliculaservice.obtenerUnaPelicula(param.id);
        return res.send(resultadoPeli);
    }
    @Put('Pelicula/:id')
    editarUnaPelicula(@Body()bodyParams,@Res()res,@Param()param){
        const resultado=this.Peliculaservice.editarUno(param.id,bodyParams.nombre,bodyParams.anioLanzamiento,bodyParams.rating,bodyParams.actoresPrincipales,bodyParams.sinopsis,bodyParams.actorId)
        return res.send(resultado);
    }

}