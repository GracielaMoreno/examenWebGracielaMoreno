import {HttpException, HttpStatus} from "@nestjs/common";

export class PeticionInvalida extends HttpException {
    constructor(private _msm,
                private _detalle,
                private _nivelesError) {

        super(
            {
                mensaje: _msm,
                detalleError: _detalle,
                nivelesError: _nivelesError,
                status: HttpStatus.BAD_REQUEST
            },
            HttpStatus.BAD_REQUEST
        );
    }
}