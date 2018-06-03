
import {HttpException, HttpStatus} from "@nestjs/common";

export class NoIdentificada extends HttpException{
    constructor(private _msm,
                private _detalle,
                private _nivelesError){
        super(
            {
                msm:_msm,
                detalleError:_detalle,
                nivelesError: _nivelesError,
                status:HttpStatus.NOT_FOUND
            },
            HttpStatus.NOT_FOUND
        );
    }
}