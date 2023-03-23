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
import { RetoureFormComponent } from './components/retoure-form/retoure-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import{MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { EditRetoureComponent } from './components/edit-retoure/edit-retoure.component';
import { DeleteRetoureComponent } from './components/delete-retoure/delete-retoure.component';
import { NavComponent } from './components/nav/nav.component';
import { RegistrationExistComponent } from './components/registration/registration-exist/registration-exist.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ImpressumComponent,
    DashboardComponent,
    RetoureFormComponent,
    RegistrationComponent,
    EditRetoureComponent,
    DeleteRetoureComponent,
    NavComponent,
    RegistrationExistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
