import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { StepsComponent } from './components/steps/steps.component';
import { RetoureComponent } from './components/retoure/retoure.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RetoureFormComponent } from './components/retoure-form/retoure-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ImpressumComponent,
    StepsComponent,
    RetoureComponent,
    DialogComponent,
    RetoureFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
