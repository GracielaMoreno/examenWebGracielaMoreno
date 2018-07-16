import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {ActoresService} from "./actores.service";
import{ActoresEntity} from "./actores.entity";



@Controller('Actor')
export class ActoresController {

    constructor(private _actoresService:ActoresService){

    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const actores = await this._actoresService.ObtenerTodos();
        return response.send(actores);
    }

    @Post()
    async crearComidaBase() {
        const actores = this._actoresService.crearComidas();
        return actores;
    }

    /*@Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const comidaPorId = this._comidaService.mostrarUnoPorId(paramParams.id);
        if (comidaPorId === undefined) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        } else {
            return response.send(comidaPorId);
        }
    }
    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(COMIDA_SCHEMA)) comidaArgumento,
        @Res() response
    ) {
        if (this._comidaService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._comidaService.editarUnoPorId(paramParams.id, comidaArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento para editar con ese id',
                'error',
                4
            )
        }
    }*/

   /* @Get('cincoPaciente')
    traercinco(): Promise<ActoresEntity[]> {
        return this._actoresService.traercinco();
    }
    @Get('siguientePaciente')
    traersi(): Promise<ActoresEntity[]> {
        return this._actoresService.traeSiguiente();
    }

    @Get('dosaciente')
    traerdos(): Promise<ActoresEntity[]> {
        return this._actoresService.traerDos();
    }

    @Get('Paciente')
    findAll(): Promise<ActoresEntity[]> {
        return this._actoresService.llenar();
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
            const autor = this._actoresService.(parametros.id);
            return res.send(autor);
        } else {
            return res.send({ mensaje: 'Id de autor no ha sido encontrado' });
        }

    }

    @Put('Actor/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const resultado=this._actoresService.editarUnAutor(parametro.idActor,bodyParams.nombres, bodyParams.apellidos, bodyParams.fechaNacimiento, bodyParams.numeroPeliculas, bodyParams.retirado);
        return res.send(resultado);
    }*/
}