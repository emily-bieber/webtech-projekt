import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RetoureFormComponent } from './components/retoure-form/retoure-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ImpressumComponent,
    DashboardComponent,
    DialogComponent,
    RetoureFormComponent,
    RegistrationComponent,
    RegistrationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
