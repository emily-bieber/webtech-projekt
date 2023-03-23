import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private auth: AuthService, private router: Router) {
    this.auth.loggedInChange.subscribe( value => {
      this.isLoggedIn = value
      if(this.isLoggedIn) {
        this.auth.userChange.subscribe( val => {
          console.log('nav user', val)
          this.username = val?.username;
          console.log('nav username', this.username)
        })

      }
    })
  }
  ngOnInit(): void {}

  checkIfLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedin();
    return this.isLoggedIn;
  }

  callLogout() {
    this.isLoggedIn = false;
    this.auth.logout();
    this.router.navigate(['/'])
  }

}

