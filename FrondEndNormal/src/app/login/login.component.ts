import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  email;
  password;
  passwordConfirmation;
  ingresarUsuario(formulario){
    const valorActualPassword = formulario.controls.password.value;
    const valorActualPasswordConfirmation = formulario.controls.passwordConfirmation.value;

    if(valorActualPassword === valorActualPasswordConfirmation){
      const rutaHomeUsuario = [
        '/home',
      ];
      this._router.navigate(rutaHomeUsuario);
    }else{
      alert('Los passwords no son iguales');
      this.password = undefined;
      this.passwordConfirmation = undefined;

    }

  }
}
