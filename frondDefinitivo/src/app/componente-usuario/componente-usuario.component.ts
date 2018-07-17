import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../conexion/usuario.service';

@Component({
  selector: 'app-componente-usuario',
  templateUrl: './componente-usuario.component.html',
  styleUrls: ['./componente-usuario.component.css']
})
export class ComponenteUsuarioComponent implements OnInit {

  @Input() listaUsuarios = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.obtenerCantidadPaginas();
        this.obtenerListaAMostrar();
      }
    );
  }
  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaUsuarios.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaUsuarios.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }


}
