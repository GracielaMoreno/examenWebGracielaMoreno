import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  listaPeticiones = [1,2];
  listaPetBoton = [1,2];

  constructor() { }

  ngOnInit() {
  }

}
