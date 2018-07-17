import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {ComponenteActorComponent} from './componente-actor/componente-actor.component';
import {ComponentePeliculaComponent} from './componente-pelicula/componente-pelicula.component';
import {ComponenteUsuarioComponent} from './componente-usuario/componente-usuario.component';

export const routes: Routes = [
  {
    path: 'home',
    component: InicioComponent},
  {
    path: '',
    component: LoginComponent},
  {
    path: 'modeloPaciente/:idPaciente/modeloMedicamento/:idMedicamento',
    component: ComponenteActorComponent },
  {
    path: 'modeloPaciente/:idPaciente',
    component: ComponenteUsuarioComponent,
    children: [{
      path: 'modeloMedicamento/:idMedicamento',
      component: ComponentePeliculaComponent
    }]
  }
];
