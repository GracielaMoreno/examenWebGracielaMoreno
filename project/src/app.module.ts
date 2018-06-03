import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ActoresController} from "./actores/actores.controller";
import {ActoresService} from "./actores/actores.service";
import {AutorizacionController} from "./autorizacion.controller";
import {PeliculaController} from "./pelicula/pelicula.controller";
import {PeliculaService} from "./pelicula/pelicula.service";

@Module({
  imports: [],
  controllers: [AppController,ActoresController,AutorizacionController,PeliculaController],
  providers: [AppService,PeliculaService,ActoresService],
})
export class AppModule {}
