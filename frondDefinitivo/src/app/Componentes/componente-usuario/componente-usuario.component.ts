import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../../conexion/usuario.service';

@Component({
  selector: 'app-componente-usuario',
  templateUrl: './componente-usuario.component.html',
  styleUrls: ['./componente-usuario.component.css']
})
export class ComponenteUsuarioComponent implements OnInit {

  @Input()
  nick:string="Usuario";

  @Input()
  urlImagen:string="/assets/imagenes/1.png";

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {

  }



}
