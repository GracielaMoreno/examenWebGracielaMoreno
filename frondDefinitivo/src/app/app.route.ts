import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {ComponenteActorComponent} from './componente-actor/componente-actor.component';
import {ComponentePeliculaComponent} from './componente-pelicula/componente-pelicula.component';
import {ComponenteUsuarioComponent} from './componente-usuario/componente-usuario.component';
import {PeticionTransferenciaComponent} from './peticion-transferencia/peticion-transferencia.component';
import {SeleccionTransferenciaComponent} from './seleccion-transferencia/seleccion-transferencia.component';
import {PerfilComponent} from './perfil/perfil.component';

export const routes: Routes = [
  {component: InicioComponent,
    path: 'home/:idActual',
    children:[
  {component:PerfilComponent,
    path:"perfil/:usuarioPerfilId",
  },
  {component:PeticionTransferenciaComponent,
    path:"peticion/:idUsuarioActual/:idUsuarioVisita",
  },
  {component:SeleccionTransferenciaComponent,
    path:"seleccion",
  },
]},
  {
    path: '',
    component: LoginComponent},
  {
    path: 'perfil',
    component: PerfilComponent}
  ,
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
