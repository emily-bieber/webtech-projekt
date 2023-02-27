import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  // username = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor() {
    // this.loginForm.valueChanges.subscribe(console.log)
   }

  ngOnInit(): void {}

  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter an email';
  //   }
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a password'
  //   }
  //   if(this.password.hasError('minlength')) {
  //     return 'Password must be at least 8 ... long'
  //   }
  //   return '';
  // }

  // submit() {
  //   console.log(this.username.value + ' ' + this.password.value);
  // }

}
