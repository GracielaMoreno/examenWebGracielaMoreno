import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UsuarioService} from '../Conexion/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  nombre = '';
  contrasena = '';
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

        if (this.respuesta.respuesta === 'Aceptado') {
          const url = ['/home'];
          this._router.navigate(url);
          console.log('Bieeen!!');
        } else {
          console.log('Mall!!');
        }
      }
    );
  }
}
