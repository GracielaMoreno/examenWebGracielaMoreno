import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ActoresController} from "./actores/actores.controller";
import {ActoresService} from "./actores/actores.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController,ActoresController,AutorizacionController],
  providers: [AppService,ActoresService],
})
export class AppModule {}
