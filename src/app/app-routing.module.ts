import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RetoureFormComponent } from './components/retoure-form/retoure-form.component';

const routes: Routes = [
  {path:'dialog',
  component: DialogComponent},

  {path:'landingPage',
  component: LandingPageComponent},

  {path:'login',
  component: LoginComponent},

  {path:'impressum',
  component: ImpressumComponent},

  {path:'form',
  component: RetoureFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
