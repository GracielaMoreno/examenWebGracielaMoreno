import {Routes} from '@angular/router';
import {RutaHomeComponent} from './ruta-home/ruta-home.component';
import { LoginComponent } from './login/login.component';
export const RUTAS_APP: Routes = [

  {
    path: 'home',
    component: RutaHomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: LoginComponent
  }
];
