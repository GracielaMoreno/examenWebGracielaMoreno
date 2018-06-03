import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionInvalida} from "../excepcionesAplicacion/peticion.invalida";
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada"
@Injectable()
export class PipesApp implements PipeTransform {
    constructor(private readonly schema) {}
    transform(
        RequestDelValorBruto: any,
        metadatos: ArgumentMetadata) {


        const {
            NoEncontradoError
        } = Joi.validate(
            RequestDelValorBruto,
            this.schema
        );
        const {
            errorPeticionInvalida
        } = Joi.validate(
            RequestDelValorBruto,
            this.schema
        );

        if (errorPeticionInvalida) {
            throw new PeticionInvalida(
                'Peticion incorrecta',
                errorPeticionInvalida,
                4
            );
        }
        if(NoEncontradoError){
            throw  new NoIdentificada(
                'No se a encomtrado',
                NoEncontradoError,
                3
            )
        }
    }
}