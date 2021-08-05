import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Modulos para servicio http
import { HttpClientModule } from '@angular/common/http';

// Modulos de PrimeNg
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormLoginComponent } from './component/form-login/form-login.component';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { AsideComponent } from './component/aside/aside.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import {AvatarModule} from 'primeng/avatar';
import {MenuModule} from 'primeng/menu';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    CalendarModule,
    InputSwitchModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule,
    AvatarModule,
    MenuModule,
    TooltipModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
