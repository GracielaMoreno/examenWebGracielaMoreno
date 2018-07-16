import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../Conexion/usuario.service";


@Component({
  selector: 'app-modelo-usuario',
  templateUrl: './modelo-usuario.component.html',
  styleUrls: ['./modelo-usuario.component.css']
})
export class ModeloUsuarioComponent implements OnInit {



  usuario:Usuario[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Usuario[]>('http://localhost:3000/cincoUsuarios').subscribe((data: Usuario[]) => {
      this.usuario = data;
    });
  }


  seleccionar(){

  }

}
