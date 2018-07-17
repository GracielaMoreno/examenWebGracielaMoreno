import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css']
})
export class PeticionTransferenciaComponent implements OnInit {
  listaPeliculas = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
