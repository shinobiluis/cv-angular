import { DescargarComponent } from './pages/descargar/descargar.component';
import { PlantillaComponent } from './pages/plantilla/plantilla.component';
import { IdiomasComponent } from './pages/idiomas/idiomas.component';
import { DestrezasComponent } from './pages/destrezas/destrezas.component';
import { EstudiosCertificacionesComponent } from './pages/estudios-certificaciones/estudios-certificaciones.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { InformacionAdicionalComponent } from './pages/informacion-adicional/informacion-adicional.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VigilanteGuard } from './vigilante.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes de pagina
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate:[ VigilanteGuard ], children:[
      { path: 'home', component: HomeComponent },
      { path: 'profile',  component: ProfileComponent },
      { path: 'informacion-adicional',  component: InformacionAdicionalComponent },
      { path: 'descripcion',  component: DescripcionComponent },
      { path: 'experiencia-laboral',  component: ExperienciaLaboralComponent },
      { path: 'estudios-y-certificaciones',  component: EstudiosCertificacionesComponent },
      { path: 'destrezas',  component: DestrezasComponent },
      { path: 'idiomas',  component: IdiomasComponent },
      { path: 'plantilla',  component: PlantillaComponent },
      { path: 'descargar',  component: DescargarComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**',  pathMatch: 'full',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
