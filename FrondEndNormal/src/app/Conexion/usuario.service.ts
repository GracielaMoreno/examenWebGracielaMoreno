import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, ' +
      'X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods');
    return headers;
  }

  getUsuarios() {
    const header = UsuarioService.getCommonHeaders();
    return this.http.get('http://localhost:1337/usuario', {headers: header});
  }

  getUsuariosPorNombre(nombre, contrasena) {
    const header = UsuarioService.getCommonHeaders();
    return this.http.get('http://localhost:1337/usuario/' + nombre + '/' + contrasena , {headers: header});
  }
}
