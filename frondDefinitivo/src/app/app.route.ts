import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {ComponenteActorComponent} from './Componentes/componente-actor/componente-actor.component';
import {ComponentePeliculaComponent} from './Componentes/componente-pelicula/componente-pelicula.component';
import {ComponenteUsuarioComponent} from './Componentes/componente-usuario/componente-usuario.component';
import {PeticionTransferenciaComponent} from './peticion-transferencia/peticion-transferencia.component';
import {SeleccionTransferenciaComponent} from './seleccion-transferencia/seleccion-transferencia.component';
import {PerfilComponent} from './perfil/perfil.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent},

  {component: InicioComponent,
    path: 'home/:idUsuario',
    children:[
  {component:PerfilComponent,
    path:"perfil",
  },
  {component:PeticionTransferenciaComponent,
    path:"perfil/tranferencia/:idVisitante",
  },
      {component:SeleccionTransferenciaComponent,
        path:"perfil/seleccion/:idPelicula",
      },
]},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
