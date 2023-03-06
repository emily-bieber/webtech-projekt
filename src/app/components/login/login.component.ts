import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth.service';
import { User } from '../../shared/models/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, private router: Router) {
    // this.loginForm.valueChanges.subscribe(console.log)
   }

  ngOnInit(): void {}

  onSubmit(): void {
    const values = this.loginForm.value;
    const username = values.username;
    const password =  values.password;
    console.log('values username', username)
    console.log('values password', password)

    this.auth.loginUser(username!, password!).subscribe({
       next: (response) => {
          console.log('login response',response);
          if(response.status == 201)
          {
            this.auth.getOneUser(username!).subscribe(
              (response) => {
                  this.auth.login(response);
                  this.router.navigate(['/dashboard'])
              }
            )
          } else {
            console.log('kein Login - Nutzername und/oder Passwort stimmen nicht')
          }
      },
      error: (err) => {
        console.log('login error',err);
      },
      complete: () => console.log('login completed')
    }
    )

  }

}
