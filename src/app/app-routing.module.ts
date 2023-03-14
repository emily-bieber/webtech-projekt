import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { RetoureFormComponent } from './components/retoure-form/retoure-form.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'register/successful',
    component: RegistrationSuccessComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard]
  },

  { path: 'form',
    component: RetoureFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
