import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService) {
    // this.loginForm.valueChanges.subscribe(console.log)
   }

  ngOnInit(): void {}

  // submit() {
  //   const values = this.loginForm.value;
  //   const user = {
  //     username = 
  //     password
  //   }
  //   this.auth.loginUser().subscribe()
  // }

}
