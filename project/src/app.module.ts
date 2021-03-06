import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ActoresEntity} from "./actores/actores.entity";
import {PeliculasEntity} from "./pelicula/peliculas.entity";
import {ActoresController} from "./actores/actores.controller";
import {PeliculaController} from "./pelicula/pelicula.controller";
import {AutorizacionController} from "./autorizacion.controller";
import {ActoresService} from "./actores/actores.service";
import {PeliculaService} from "./pelicula/pelicula.service";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {UsuarioService} from "./Usuario/usuario.service";
import {UsuarioController} from "./Usuario/usuario.controller";
import {TransferenciasEntity} from "./transferencias/transferencias.entity";
import {TrnaferenciaService} from "./transferencias/trnaferencia.service";
import {TranferenciaControler} from "./transferencias/tranferencia.controler";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'examenweb2b',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            //ssl: true,
        }),
        TypeOrmModule.forFeature([ActoresEntity,PeliculasEntity,UsuarioEntity,TransferenciasEntity])

    ],
    controllers: [AppController, ActoresController, PeliculaController,AutorizacionController,UsuarioController,TranferenciaControler],
    providers: [AppService, ActoresService, PeliculaService,UsuarioService,TrnaferenciaService],
})
export class AppModule {}
