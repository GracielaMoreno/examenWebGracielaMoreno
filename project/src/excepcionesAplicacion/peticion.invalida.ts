import {HttpException, HttpStatus} from "@nestjs/common";

export class PeticionInvalida extends HttpException {
    constructor(private readonly _mensaje,
                private readonly _nivelesError) {

        super(
            {mensaje: 'Error la peticion es invalida',
                statusCode: HttpStatus.BAD_REQUEST,
                nivelError: _nivelesError,
                detalle: _mensaje},
            HttpStatus.BAD_REQUEST);
    }
}