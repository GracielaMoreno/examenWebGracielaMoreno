import {Body, Controller, Get, HttpCode, Post, Res} from '@nestjs/common';
import {Actor,ActoresService} from "./actores.service";




@Controller('Autor')
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

    }



}