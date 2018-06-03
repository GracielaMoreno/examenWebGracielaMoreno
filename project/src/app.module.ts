import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ActoresController} from "./actores/actores.controller";
import {ActoresService} from "./actores/actores.service";

@Module({
  imports: [],
  controllers: [AppController,ActoresController],
  providers: [AppService,ActoresService],
})
export class AppModule {}
