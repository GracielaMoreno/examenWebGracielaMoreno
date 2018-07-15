import { Component, OnInit } from '@angular/core';
import {ActoresEntity} from "../../../../project/src/actores/actores.entity";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {
config:ActoresEntity

  constructor() { }

  ngOnInit() {
  }

}
