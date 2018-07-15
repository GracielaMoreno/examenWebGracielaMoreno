import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionInvalida} from "../excepcionesAplicacion/peticion.invalida";
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada"
@Injectable()
export class PipesApp implements PipeTransform {
    constructor(private readonly schema) {}
    transform(
        RequestActor: any,
        metadatos: ArgumentMetadata) {


        const {
            NoEncontradoError
        } = Joi.validate(
            RequestActor,
            this.schema
        );

        if (NoEncontradoError) {
            throw new PeticionInvalida(
               'NoEncontradoErrorActor',
                'Error en Actor',
           );
        } else {
           return RequestActor;

        }
    }
}