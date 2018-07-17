import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class ActorService {

  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getActor() {
    let header = ActorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Actor",{headers: header});
  }

  getActorPorNombre(nombre) {
    let header = ActorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Actor/" + nombre ,{headers: header});
  }

  getActorBusqueda(parametroBusqueda) {
    let header = ActorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Actor/" + parametroBusqueda ,{headers: header});
  }
}
