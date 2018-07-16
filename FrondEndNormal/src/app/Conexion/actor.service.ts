import { Injectable } from '@angular/core';


@Injectable()
export class ActorService {

}
export interface Actor{
  idActor: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroPeliculas: number;
  retirado: boolean;
  urlActores:string;
  actorId:number;
}

