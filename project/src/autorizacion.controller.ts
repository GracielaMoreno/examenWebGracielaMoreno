import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('autorizacion')
export class AutorizacionController {
    @Post('iniciarSesion')
    iniciarSesion(@Body()bodyParams,@Res()res,@Req()req) {
        if (bodyParams.usuario == 'adrianeguez' && bodyParams.password == '12345678910') {
            const valorCookieInicio = {
                valor: 'adrianeguez',
                nombre: 'token'
            };
            return res.cookie(valorCookieInicio.nombre, valorCookieInicio.valor).send(
                {mensaje: 'OK'}
            );

        }
    }
@Get('inicioDeSesion')
    iniciarCookie(@Res() res){
        const valorCookieInicio={
            valor:'andrianeguez',
            nombre:'token'
        };
        return res.cookie(valorCookieInicio.nombre,valorCookieInicio.valor).send();
}
@Post('cerrarSesion')
    cerrarSesion(@Req()req,@Res()res){
    const valorCookieCierre={
        valor:'andrianeguez',
        nombre:'undefined'
    };

        return res.clearCookie().cookie(valorCookieCierre.nombre,valorCookieCierre.valor).send({
            mensaje:'Usted Salio del sistema'
        });

}
}