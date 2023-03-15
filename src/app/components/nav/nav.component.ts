import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checkIfLoggedIn(): boolean {
    this.loggedIn = this.auth.isLoggedin();
    return this.loggedIn;
  }

  logout(): void {
    this.auth.logout();
  }
}

