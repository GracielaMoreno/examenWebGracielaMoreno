import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class PeliculaService{

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

  getPelicula() {
    let header = PeliculaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pelicula", {headers: header});
  }

  getPeliculasPorNombre(nombre) {
    let header = PeliculaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pelicula/" + nombre, {headers: header});
  }

  getPeliculaBusqueda(parametroBusqueda) {
    let header = PeliculaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pelicula/" + parametroBusqueda, {headers: header});
  }
}
