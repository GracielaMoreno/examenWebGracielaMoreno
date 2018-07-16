import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actor} from "../Conexion/actor.service";


@Component({
  selector: 'app-modelo-actor',
  templateUrl: './modelo-actor.component.html',
  styleUrls: ['./modelo-actor.component.css']
})
export class ModeloActorComponent implements OnInit {

  actor:Actor[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Actor[]>('http://localhost:3000/Actor').subscribe((data: Actor[]) => {
      this.actor = data;
    });
  }

  seleccionar(){

  }
}
