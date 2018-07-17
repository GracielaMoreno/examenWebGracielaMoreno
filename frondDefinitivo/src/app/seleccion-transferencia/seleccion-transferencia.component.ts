import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {
  listaPeliculas = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
