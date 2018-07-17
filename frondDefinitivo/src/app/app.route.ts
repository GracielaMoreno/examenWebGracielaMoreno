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
  {
    path: 'home',
    component: InicioComponent},
  {
    path: '',
    component: LoginComponent},
  {
    path: 'petTransf/:idUsuario',
    component:PeticionTransferenciaComponent},
  {
    path: 'selecTransf',
    component: SeleccionTransferenciaComponent},
  {
    path: 'perfil',
    component: PerfilComponent}
];
