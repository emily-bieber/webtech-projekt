import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationExistComponent } from './registration-exist/registration-exist.component';

export interface DialogData {
  headline: string;
  info: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  hide = true;
  hide2 = true;
  user!: User;

  constructor( private auth: AuthService, private router: Router, public dialog: MatDialog ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const values = this.registerForm.value;
    this.user = {
      _id: '',
      username: values.username!,
      email: values.email!,
      password: values.password!
    };
    console.log(this.user)
    this.auth.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('response', response);
          this.user = response;
          this.openDialog({ headline: "Erfolg", info: "User " + response.username + "ist erfolgreich registriert! Melde dich jetzt an!" });
          this.auth.login(this.user);
        },
       // error: (err) => console.log(err),
       // complete: () => {
        //  console.log('register completed')
        //this.router.navigate(['/register/successful'])}
          error: (err) => {
            console.log('error', err.error.error)
            this.openDialog({ headline: "Fehler", info: "username und/oder E-Mail existiert bereits" });
          },
          complete: () => console.log('register completed')
    });
  }

  redirectToLandingPage() {
    this.router.navigate(['/']);
  }

  openDialog(data: DialogData) {
    this.dialog.open(RegistrationExistComponent, { data });
}
}

