import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res} from '@nestjs/common';
import {Actor,ActoresService} from "./actores.service";




@Controller('Actor')
export class ActoresController {

    constructor(private _actoresService:ActoresService){

    }

    @Get()
    listarTodos(){
        return this._actoresService.arregloAutores;
    }

    @Post()
    crearAutor(@Body()bodyParams,res,@Res() req){
        const envId=bodyParams.idAutor;
        const envNombres=bodyParams.nombres;
        const envApellidos=bodyParams.apellidos;
        const envFechaNacimiento=bodyParams.fechaNacimiento;
        const envNumeroPeliculas=bodyParams.numeroPeliculas;
        const envRetirado=bodyParams.retirado;
        const enviarParametros=(envId && envNombres &&envApellidos &&envFechaNacimiento &&envNumeroPeliculas&&envRetirado);
        if(enviarParametros){
            const actor = new  Actor(bodyParams.idPaciente, bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.hijos, bodyParams.tieneSeguro);
            return res.send(this._actoresService.crearAutor(actor));
        }else{
            return res
                .status(400)
                .send({
                    mensaje: 'No envia parametros',
                    status: 400
                })
        }
    }

    @Get('mostrar/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const actor =this._actoresService.obtenerUnAutor(parametros.id);
        return res.send(actor);
    }

    @Put('modificar/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const resultado=this._actoresService.editarUnAutor(parametro.id,bodyParams.nombre, bodyParams.apellido, bodyParams.fecha, bodyParams.hijos, bodyParams.seguro);
        return res.send(resultado);
    }
}