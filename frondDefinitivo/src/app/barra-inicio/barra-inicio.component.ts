import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';


@Component({
  selector: 'app-barra-inicio',
  templateUrl: './barra-inicio.component.html',
  styleUrls: ['./barra-inicio.component.css']
})
export class BarraInicioComponent implements OnInit {
  @Input() nombreUsuario;
  @Input() imgUsuario;

  constructor() { }

  ngOnInit() {
  }

}
