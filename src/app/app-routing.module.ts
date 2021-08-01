import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes de pagina
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**',  pathMatch: 'full',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
