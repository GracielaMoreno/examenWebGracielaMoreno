import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Pelicula} from "../actor/Clases/peliculas";

@Injectable()
export class TransferenciasService{
  static arregloTransferencias=[];
  static arreglo_Transferencias:Array<String>=[];
  constructor(private http:HttpClient){

  }
}
