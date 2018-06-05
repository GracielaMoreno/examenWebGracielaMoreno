import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {NoIdentificada} from "../excepcionesAplicacion/no.identificada";

@Injectable()
export class PipesNoEncontrado implements PipeTransform{
    constructor(private readonly schema) {}
    transform(RequestActor: any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {
        const {error} = Joi.validate(
            RequestActor,
            this.schema
        );
        if (error) {
            throw new NoIdentificada(
                'error',
                'No encontrado',
                5
            );
        }else{
            return RequestActor;

        }


    }
}