import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../conexion/usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  contrasena: String = '';
  respuesta;

  constructor(private _usuarioService: UsuarioService,
              private _router: Router) {
    this.nombre = '';
    this.contrasena = '';
  }

  ngOnInit() {
  }

  ingresar() {
    this._usuarioService.getUsuariosPorNombre(this.nombre, this.contrasena).subscribe(
      (result: any) => {
        this.respuesta = result;
        console.log(this.respuesta);

       const idActual=this.respuesta.id ;
          const url = ['/home',idActual];
          this._router.navigate(url);


      }
    );
  }
}
