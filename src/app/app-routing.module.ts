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
