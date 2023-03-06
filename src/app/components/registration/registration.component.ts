import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  hide = true;
  hide2 = true;
  user!: User;

  constructor( private auth: AuthService, private router: Router ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const values = this.registerForm.value;
    this.user = {
      username: values.username!,
      email: values.email!,
      password: values.password!
    };
    console.log(this.user)
    this.auth.registerUser(this.user).subscribe({
        next: (response) => console.log('response', response),
        error: (err) => console.log(err),
        complete: () => {
          console.log('register completed')
          this.router.navigate(['/register/successful'])}
    });
  }


}

